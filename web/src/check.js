// Printability checks that can be made from the triangles alone (no slicing).
import * as THREE from 'three';

const MAX_TOPO_TRIS = 1200000;  // above this the edge analysis would use too much memory on a phone
const RAY_BUDGET = 60e6;        // ray x triangle tests allowed for the wall-thickness sampling
const MAX_RAYS = 300, MIN_RAYS = 40;
export const THIN_MM = 0.8;     // two 0.4 mm nozzle lines

function mulberry32(a) {
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function checkModel(model, bbox) {
  let T = 0;
  model.traverse((o) => { if (o.isMesh) { const g = o.geometry; T += Math.floor((g.index ? g.index.count : g.attributes.position.count) / 3); } });
  const P = new Float32Array(9 * T);
  const v = new THREE.Vector3();
  let w = 0;
  model.traverse((o) => {
    if (!o.isMesh) return;
    const pos = o.geometry.attributes.position, idx = o.geometry.index, mw = o.matrixWorld;
    const n = Math.floor((idx ? idx.count : pos.count) / 3) * 3;
    for (let i = 0; i < n; i++) { v.fromBufferAttribute(pos, idx ? idx.getX(i) : i).applyMatrix4(mw); P[w++] = v.x; P[w++] = v.y; P[w++] = v.z; }
  });
  const size = bbox.getSize(new THREE.Vector3()), diag = size.length() || 1;

  // per-triangle normal (scaled by area), signed volume, degenerate count
  const N = new Float32Array(3 * T), area = new Float32Array(T);
  let vol = 0, totalArea = 0, degenerate = 0;
  const degEps = diag * diag * 1e-12;
  for (let t = 0; t < T; t++) {
    const o = 9 * t;
    const ax = P[o], ay = P[o + 1], az = P[o + 2], bx = P[o + 3], by = P[o + 4], bz = P[o + 5], cx = P[o + 6], cy = P[o + 7], cz = P[o + 8];
    const nx = (by - ay) * (cz - az) - (bz - az) * (cy - ay), ny = (bz - az) * (cx - ax) - (bx - ax) * (cz - az), nz = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    const len = Math.hypot(nx, ny, nz);
    if (len <= degEps) { degenerate++; continue; }
    N[3 * t] = nx / len; N[3 * t + 1] = ny / len; N[3 * t + 2] = nz / len;
    area[t] = len / 2; totalArea += len / 2;
    vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
  }
  const out = { tris: T, degenerate, inverted: vol < 0, size: [size.x, size.y, size.z], topo: null, thin: null, openSegments: null, thinTris: null };

  // ---- edges: open, shared by more than two faces, or wound inconsistently; and separate bodies ----
  if (T > 0 && T <= MAX_TOPO_TRIS) {
    const q = 131071 / Math.max(size.x, size.y, size.z, 1e-9), mn = bbox.min;
    let keys = new Float64Array(3 * T);
    for (let i = 0; i < 3 * T; i++) {
      keys[i] = (Math.round((P[3 * i] - mn.x) * q) * 131072 + Math.round((P[3 * i + 1] - mn.y) * q)) * 131072 + Math.round((P[3 * i + 2] - mn.z) * q);
    }
    const uniq = keys.slice().sort();
    let V = 0;
    for (let i = 0; i < uniq.length; i++) if (i === 0 || uniq[i] !== uniq[i - 1]) uniq[V++] = uniq[i];
    const ids = new Uint32Array(3 * T), vpos = new Float32Array(3 * V);
    for (let i = 0; i < 3 * T; i++) {
      const k = keys[i];
      let lo = 0, hi = V - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (uniq[mid] < k) lo = mid + 1; else hi = mid; }
      ids[i] = lo;
      vpos[3 * lo] = P[3 * i]; vpos[3 * lo + 1] = P[3 * i + 1]; vpos[3 * lo + 2] = P[3 * i + 2];
    }
    // separate bodies (connected through shared vertices)
    const parent = new Uint32Array(V);
    for (let i = 0; i < V; i++) parent[i] = i;
    const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
    for (let t = 0; t < T; t++) {
      if (!area[t]) continue;
      const a = find(ids[3 * t]), b = find(ids[3 * t + 1]), c = find(ids[3 * t + 2]);
      if (b !== a) parent[b] = a;
      const c2 = find(c);
      if (c2 !== a) parent[c2] = a;
    }
    const roots = new Set();
    for (let t = 0; t < T; t++) if (area[t]) roots.add(find(ids[3 * t]));
    // edges, sorted so that the copies of one edge sit next to each other
    for (let t = 0; t < T; t++) {
      for (let e = 0; e < 3; e++) {
        const a = ids[3 * t + e], b = ids[3 * t + (e + 1) % 3];
        keys[3 * t + e] = (!area[t] || a === b) ? Infinity : ((a < b ? a * V + b : b * V + a) * 2 + (a < b ? 1 : 0));
      }
    }
    keys.sort();
    let open = 0, nonManifold = 0, inconsistent = 0;
    const seg = [];
    for (let i = 0; i < keys.length && keys[i] !== Infinity;) {
      const edge = Math.floor(keys[i] / 2);
      let count = 0, fwd = 0, j = i;
      while (j < keys.length && Math.floor(keys[j] / 2) === edge) { count++; fwd += keys[j] % 2; j++; }
      if (count === 1) {
        open++;
        if (seg.length < 6 * 20000) { const a = Math.floor(edge / V), b = edge - a * V; seg.push(vpos[3 * a], vpos[3 * a + 1], vpos[3 * a + 2], vpos[3 * b], vpos[3 * b + 1], vpos[3 * b + 2]); }
      } else if (count > 2) nonManifold++;
      else if (fwd !== 1) inconsistent++;
      i = j;
    }
    keys = null;
    out.topo = { open, nonManifold, inconsistent, bodies: roots.size };
    if (seg.length) out.openSegments = new Float32Array(seg);
  }

  // ---- wall thickness, sampled: from points on the surface, how far is it straight through the material? ----
  const rays = Math.min(MAX_RAYS, Math.floor(RAY_BUDGET / Math.max(T, 1)));
  const closed = out.topo && out.topo.open === 0;
  out.thinSkip = !closed ? (out.topo ? 'open' : 'big') : out.inverted ? 'inverted' : rays < MIN_RAYS ? 'big' : null;
  if (closed && !out.inverted && rays >= MIN_RAYS && totalArea > 0) {
    const cum = new Float64Array(T);
    let acc = 0;
    for (let t = 0; t < T; t++) { acc += area[t]; cum[t] = acc; }
    const rnd = mulberry32(12345), eps = diag * 1e-5, picked = new Set();
    let thinCount = 0, minT = Infinity, samples = 0;
    const thinTris = [];
    for (let r = 0; r < rays; r++) {
      const target = rnd() * acc;
      let lo = 0, hi = T - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (cum[mid] < target) lo = mid + 1; else hi = mid; }
      const s = lo;
      if (picked.has(s) || !area[s]) continue;
      picked.add(s); samples++;
      const o = 9 * s, dx = -N[3 * s], dy = -N[3 * s + 1], dz = -N[3 * s + 2];
      const ox = (P[o] + P[o + 3] + P[o + 6]) / 3 + dx * eps, oy = (P[o + 1] + P[o + 4] + P[o + 7]) / 3 + dy * eps, oz = (P[o + 2] + P[o + 5] + P[o + 8]) / 3 + dz * eps;
      let best = Infinity;
      for (let t = 0; t < T; t++) {
        // only surfaces the ray leaves the material through
        if (t === s || N[3 * t] * dx + N[3 * t + 1] * dy + N[3 * t + 2] * dz <= 0) continue;
        const p = 9 * t;
        const e1x = P[p + 3] - P[p], e1y = P[p + 4] - P[p + 1], e1z = P[p + 5] - P[p + 2];
        const e2x = P[p + 6] - P[p], e2y = P[p + 7] - P[p + 1], e2z = P[p + 8] - P[p + 2];
        const hx = dy * e2z - dz * e2y, hy = dz * e2x - dx * e2z, hz = dx * e2y - dy * e2x;
        const det = e1x * hx + e1y * hy + e1z * hz;
        if (det > -1e-12 && det < 1e-12) continue;
        const f = 1 / det, sx = ox - P[p], sy = oy - P[p + 1], sz = oz - P[p + 2];
        const u = f * (sx * hx + sy * hy + sz * hz);
        if (u < 0 || u > 1) continue;
        const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
        const vv = f * (dx * qx + dy * qy + dz * qz);
        if (vv < 0 || u + vv > 1) continue;
        const dist = f * (e2x * qx + e2y * qy + e2z * qz);
        if (dist > 0 && dist < best) best = dist;
      }
      if (best === Infinity) continue;
      const thick = best + eps;
      if (thick < minT) minT = thick;
      if (thick < THIN_MM) { thinCount++; for (let k = 0; k < 9; k++) thinTris.push(P[o + k]); }
    }
    out.thin = { samples, thinCount, min: minT === Infinity ? null : minT };
    if (thinTris.length) out.thinTris = new Float32Array(thinTris);
  }
  return out;
}

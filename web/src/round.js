// Radius / diameter of a tessellated cylindrical surface (hole wall, shaft, fillet)
// found from the tapped triangle by walking the neighbouring flat strips.
import * as THREE from 'three';

const COS_COPL = Math.cos(THREE.MathUtils.degToRad(0.25));
const COS_MAX = Math.cos(THREE.MathUtils.degToRad(50));
let cache = new WeakMap();
export function resetTopo() { cache = new WeakMap(); }
export const MAX_TRIS = 3000000;

export function triCount(mesh) {
  const g = mesh.geometry;
  return Math.floor((g.index ? g.index.count : g.attributes.position.count) / 3);
}
export const hasTopo = (mesh) => cache.has(mesh.geometry);

function topo(mesh, bbox) {
  const geo = mesh.geometry;
  if (cache.has(geo)) return cache.get(geo);
  const pos = geo.attributes.position, idx = geo.index, T = triCount(mesh);
  const P = new Float64Array(9 * T), N = new Float64Array(3 * T), vid = new Uint32Array(3 * T);
  const v = new THREE.Vector3(), mw = mesh.matrixWorld;
  const size = bbox.getSize(new THREE.Vector3());
  const q = 131071 / Math.max(size.x, size.y, size.z, 1e-9);
  const ids = new Map();
  for (let i = 0; i < 3 * T; i++) {
    v.fromBufferAttribute(pos, idx ? idx.getX(i) : i).applyMatrix4(mw);
    P[3 * i] = v.x; P[3 * i + 1] = v.y; P[3 * i + 2] = v.z;
    const key = (Math.round((v.x - bbox.min.x) * q) * 131072 + Math.round((v.y - bbox.min.y) * q)) * 131072 + Math.round((v.z - bbox.min.z) * q);
    let id = ids.get(key);
    if (id === undefined) { id = ids.size; ids.set(key, id); }
    vid[i] = id;
  }
  for (let t = 0; t < T; t++) {
    const o = 9 * t;
    const ux = P[o + 3] - P[o], uy = P[o + 4] - P[o + 1], uz = P[o + 5] - P[o + 2];
    const wx = P[o + 6] - P[o], wy = P[o + 7] - P[o + 1], wz = P[o + 8] - P[o + 2];
    const nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
    const l = Math.hypot(nx, ny, nz);
    if (l > 0) { N[3 * t] = nx / l; N[3 * t + 1] = ny / l; N[3 * t + 2] = nz / l; }
  }
  const V = ids.size, vStart = new Uint32Array(V + 1);
  for (let i = 0; i < 3 * T; i++) vStart[vid[i] + 1]++;
  for (let i = 0; i < V; i++) vStart[i + 1] += vStart[i];
  const fill = vStart.slice(0, V), vTris = new Uint32Array(3 * T);
  for (let i = 0; i < 3 * T; i++) vTris[fill[vid[i]]++] = (i / 3) | 0;
  const tp = { T, P, N, vid, vStart, vTris };
  cache.set(geo, tp);
  return tp;
}

function neighbor(tp, t, a, b) {
  const { vid, vStart, vTris } = tp;
  for (let k = vStart[a]; k < vStart[a + 1]; k++) {
    const u = vTris[k];
    if (u === t) continue;
    if (vid[3 * u] === b || vid[3 * u + 1] === b || vid[3 * u + 2] === b) return u;
  }
  return -1;
}

const nrm = (tp, t) => new THREE.Vector3(tp.N[3 * t], tp.N[3 * t + 1], tp.N[3 * t + 2]);

// a facet = connected coplanar triangles; creases = its smooth (non-sharp) neighbours grouped by normal
function facetOf(tp, st, t0) {
  if (st.mark[t0]) return st.facets[st.mark[t0]];
  const id = st.facets.length, n = nrm(tp, t0);
  const f = { id, n, tris: [t0], groups: [] };
  st.facets.push(f);
  st.mark[t0] = id;
  const { N, vid } = tp;
  for (let h = 0; h < f.tris.length; h++) {
    const t = f.tris[h];
    for (let e = 0; e < 3; e++) {
      const a = vid[3 * t + e], b = vid[3 * t + (e + 1) % 3];
      if (a === b) continue;
      const u = neighbor(tp, t, a, b);
      if (u < 0 || st.mark[u] === id) continue;
      const dot = N[3 * u] * n.x + N[3 * u + 1] * n.y + N[3 * u + 2] * n.z;
      if (dot > COS_COPL) {
        if (!st.mark[u] && f.tris.length < 20000) { st.mark[u] = id; f.tris.push(u); }
      } else if (dot > COS_MAX) {
        const un = nrm(tp, u);
        let g = f.groups.find((x) => x.n.dot(un) > COS_COPL);
        if (!g) { g = { n: un, u, count: 0 }; f.groups.push(g); }
        g.count++;
      }
    }
  }
  return f;
}

function chord(tp, f, d, e1, e2) {
  const dir = new THREE.Vector3().crossVectors(d, f.n).normalize();
  let lo = Infinity, hi = -Infinity, pl = null, ph = null;
  const p = new THREE.Vector3();
  for (const t of f.tris) for (let k = 0; k < 3; k++) {
    p.fromArray(tp.P, 9 * t + 3 * k);
    const s = p.dot(dir);
    if (s < lo) { lo = s; pl = [p.dot(e1), p.dot(e2)]; }
    if (s > hi) { hi = s; ph = [p.dot(e1), p.dot(e2)]; }
  }
  return { w: hi - lo, pts: [pl, ph] };
}

function fitCircle(pts) {
  let mx = 0, my = 0;
  for (const p of pts) { mx += p[0]; my += p[1]; }
  mx /= pts.length; my /= pts.length;
  let suu = 0, suv = 0, svv = 0, suuu = 0, svvv = 0, suvv = 0, svuu = 0;
  for (const p of pts) {
    const u = p[0] - mx, v = p[1] - my;
    suu += u * u; suv += u * v; svv += v * v;
    suuu += u * u * u; svvv += v * v * v; suvv += u * v * v; svuu += v * u * u;
  }
  const det = suu * svv - suv * suv;
  if (Math.abs(det) < 1e-12 * (suu + svv) * (suu + svv) || det === 0) return null;
  const a = (suuu + suvv) / 2, b = (svvv + svuu) / 2;
  const uc = (a * svv - b * suv) / det, vc = (b * suu - a * suv) / det;
  const r = Math.sqrt(uc * uc + vc * vc + (suu + svv) / pts.length);
  let err = 0;
  for (const p of pts) { const e = Math.hypot(p[0] - mx - uc, p[1] - my - vc) - r; err += e * e; }
  return { cx: mx + uc, cy: my + vc, r, rms: Math.sqrt(err / pts.length) };
}

function tryAxis(tp, st, f0, d, hitPoint) {
  const e2 = f0.n.clone(), e1 = new THREE.Vector3().crossVectors(d, f0.n).normalize();
  const step = (f, sense) => {
    let best = null;
    for (const g of f.groups) {
      if (Math.abs(g.n.dot(d)) > 0.03) continue;
      const s = new THREE.Vector3().crossVectors(f.n, g.n).dot(d);
      if (Math.sign(s) !== sense) continue;
      if (!best || g.count > best.count) best = g;
    }
    return best ? { g: best, ang: Math.acos(Math.min(1, f.n.dot(best.n))) } : null;
  };
  const first = [step(f0, 1), step(f0, -1)];
  const theta = Math.max(first[0] ? first[0].ang : 0, first[1] ? first[1].ang : 0);
  if (!theta) return null;
  const c0 = chord(tp, f0, d, e1, e2);
  const accepted = new Set([f0.id]), facets = [f0], pts = [...c0.pts];
  let closed = false, arc = theta;
  for (const sense of [1, -1]) {
    let cur = f0;
    for (let i = 0; i < 1440; i++) {
      const s = step(cur, sense);
      if (!s || s.ang < 0.7 * theta || s.ang > 1.45 * theta) break;
      const next = facetOf(tp, st, s.g.u);
      if (next.id === f0.id) { closed = true; break; }
      if (accepted.has(next.id)) break;
      const c = chord(tp, next, d, e1, e2);
      if (c.w < 0.6 * c0.w || c.w > 1.6 * c0.w) break;
      accepted.add(next.id); facets.push(next); pts.push(...c.pts);
      arc += s.ang;
      cur = next;
    }
    if (closed) break;
  }
  if (facets.length < 2) return null;
  const fit = fitCircle(pts);
  if (!fit || !(fit.r > 0) || fit.rms > 0.03 * fit.r) return null;
  const h = hitPoint.dot(d);
  const center = e1.clone().multiplyScalar(fit.cx).addScaledVector(e2, fit.cy).addScaledVector(d, h);
  const concave = hitPoint.clone().sub(center).dot(f0.n) < 0;
  let n = 0;
  for (const f of facets) n += f.tris.length;
  const tris = new Float32Array(9 * n);
  let o = 0;
  for (const f of facets) for (const t of f.tris) for (let k = 0; k < 9; k++) tris[o++] = tp.P[9 * t + k];
  return { r: fit.r, closed, arc: closed ? 360 : THREE.MathUtils.radToDeg(arc), concave, center, d, e1, e2, tris, facets: facets.length };
}

export function measureRound(mesh, faceIndex, hitPoint, bbox) {
  const tp = topo(mesh, bbox);
  const st = { mark: new Int32Array(tp.T), facets: [null] };
  const f0 = facetOf(tp, st, faceIndex);
  if (f0.n.lengthSq() === 0) return null;
  let best = null;
  const tried = [];
  for (const g of f0.groups) {
    const d = new THREE.Vector3().crossVectors(f0.n, g.n);
    if (d.lengthSq() < 1e-12) continue;
    d.normalize();
    if (tried.some((x) => Math.abs(x.dot(d)) > 0.9999)) continue;
    tried.push(d);
    const r = tryAxis(tp, st, f0, d, hitPoint);
    if (r && (!best || r.facets > best.facets)) best = r;
  }
  return best;
}

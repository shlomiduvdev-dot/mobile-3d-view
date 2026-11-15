// Overhang marking and candidate print orientations, straight from the triangles.
import * as THREE from 'three';

const OVERHANG_NZ = -Math.SQRT1_2; // steeper than 45 degrees from vertical, same rule as the support estimate
const BED_GAP = 0.3;

function eachTriangle(model, fn) {
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  model.traverse((mesh) => {
    if (!mesh.isMesh) return;
    const pos = mesh.geometry.attributes.position, idx = mesh.geometry.index, mw = mesh.matrixWorld;
    const n = idx ? idx.count : pos.count;
    for (let i = 0; i + 2 < n; i += 3) {
      a.fromBufferAttribute(pos, idx ? idx.getX(i) : i).applyMatrix4(mw);
      b.fromBufferAttribute(pos, idx ? idx.getX(i + 1) : i + 1).applyMatrix4(mw);
      c.fromBufferAttribute(pos, idx ? idx.getX(i + 2) : i + 2).applyMatrix4(mw);
      const ux = b.x - a.x, uy = b.y - a.y, uz = b.z - a.z, wx = c.x - a.x, wy = c.y - a.y, wz = c.z - a.z;
      const nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
      const len = Math.hypot(nx, ny, nz);
      if (len > 0) fn(a, b, c, nx / len, ny / len, nz / len, len / 2);
    }
  });
}

/** World-space triangles that would need support in the current orientation. */
export function overhangTriangles(model, bbox) {
  const out = [], zBed = bbox.min.z;
  eachTriangle(model, (a, b, c, nx, ny, nz) => {
    if (nz >= OVERHANG_NZ) return;
    if ((a.z + b.z + c.z) / 3 - zBed <= BED_GAP) return; // resting on the bed
    out.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  });
  return new Float32Array(out);
}

/** Directions (world space) worth trying as "down": the six axes plus the model's largest flat faces. */
export function candidateDirections(model, maxFaces) {
  const dirs = [[0, 0, -1], [0, 0, 1], [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0]].map((d) => new THREE.Vector3(...d));
  const bins = new Map();
  eachTriangle(model, (a, b, c, nx, ny, nz, area) => {
    const key = Math.round(nx * 25) + ',' + Math.round(ny * 25) + ',' + Math.round(nz * 25);
    let bin = bins.get(key);
    if (!bin) { bin = { x: 0, y: 0, z: 0, area: 0 }; bins.set(key, bin); }
    bin.x += nx * area; bin.y += ny * area; bin.z += nz * area; bin.area += area;
  });
  const faces = Array.from(bins.values()).sort((p, q) => q.area - p.area);
  const near = Math.cos(THREE.MathUtils.degToRad(4));
  let added = 0;
  for (const f of faces) {
    if (added >= maxFaces) break;
    const v = new THREE.Vector3(f.x, f.y, f.z);
    if (v.lengthSq() === 0) continue;
    v.normalize();
    if (dirs.some((d) => d.dot(v) > near)) continue;
    dirs.push(v); added++;
  }
  return dirs;
}

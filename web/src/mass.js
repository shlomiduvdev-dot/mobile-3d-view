// Volume, surface area and an estimate of support material, straight from the triangles.
import * as THREE from 'three';

export const PLA_DENSITY = 1.24;      // g/cm3
export const SHELL_MM = 0.9;          // two 0.45 mm walls / ~4 solid layers
export const SUPPORT_DENSITY = 0.15;  // share of the supported column that is plastic
const OVERHANG_NZ = -Math.SQRT1_2;    // steeper than 45 deg from vertical
const MIN_GAP = 0.3;

export function massProps(model, bbox) {
  const size = bbox.getSize(new THREE.Vector3());
  const cell = Math.max(size.x, size.y, 1e-6) / 200;
  const nx = Math.max(1, Math.ceil(size.x / cell)), ny = Math.max(1, Math.ceil(size.y / cell));
  const ox = bbox.min.x, oy = bbox.min.y, zBed = bbox.min.z;
  const head = new Int32Array(nx * ny).fill(-1);
  const evZ = [], evN = [], evNext = [];
  let vol = 0, area = 0;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  model.updateMatrixWorld(true);
  model.traverse((mesh) => {
    if (!mesh.isMesh) return;
    const pos = mesh.geometry.attributes.position, idx = mesh.geometry.index, mw = mesh.matrixWorld;
    const n = idx ? idx.count : pos.count;
    for (let i = 0; i + 2 < n; i += 3) {
      a.fromBufferAttribute(pos, idx ? idx.getX(i) : i).applyMatrix4(mw);
      b.fromBufferAttribute(pos, idx ? idx.getX(i + 1) : i + 1).applyMatrix4(mw);
      c.fromBufferAttribute(pos, idx ? idx.getX(i + 2) : i + 2).applyMatrix4(mw);
      vol += (a.x * (b.y * c.z - b.z * c.y) - a.y * (b.x * c.z - b.z * c.x) + a.z * (b.x * c.y - b.y * c.x)) / 6;
      const ux = b.x - a.x, uy = b.y - a.y, uz = b.z - a.z, wx = c.x - a.x, wy = c.y - a.y, wz = c.z - a.z;
      const cx = uy * wz - uz * wy, cy = uz * wx - ux * wz, cz = ux * wy - uy * wx;
      const len = Math.hypot(cx, cy, cz);
      area += len / 2;
      if (len === 0 || Math.abs(cz) < 1e-9 * len) continue;
      const nz = cz / len;
      const ix0 = Math.max(0, Math.ceil((Math.min(a.x, b.x, c.x) - ox) / cell - 0.5));
      const ix1 = Math.min(nx - 1, Math.floor((Math.max(a.x, b.x, c.x) - ox) / cell - 0.5));
      const iy0 = Math.max(0, Math.ceil((Math.min(a.y, b.y, c.y) - oy) / cell - 0.5));
      const iy1 = Math.min(ny - 1, Math.floor((Math.max(a.y, b.y, c.y) - oy) / cell - 0.5));
      for (let iy = iy0; iy <= iy1; iy++) {
        const py = oy + (iy + 0.5) * cell;
        for (let ix = ix0; ix <= ix1; ix++) {
          const px = ox + (ix + 0.5) * cell;
          const w0 = (b.x - a.x) * (py - a.y) - (b.y - a.y) * (px - a.x);
          const w1 = (c.x - b.x) * (py - b.y) - (c.y - b.y) * (px - b.x);
          const w2 = (a.x - c.x) * (py - c.y) - (a.y - c.y) * (px - c.x);
          if (!((w0 >= 0 && w1 >= 0 && w2 >= 0) || (w0 <= 0 && w1 <= 0 && w2 <= 0))) continue;
          const z = a.z - (cx * (px - a.x) + cy * (py - a.y)) / cz;
          const k = iy * nx + ix;
          evZ.push(z); evN.push(nz); evNext.push(head[k]); head[k] = evZ.length - 1;
        }
      }
    }
  });
  let supportVol = 0;
  const col = [];
  for (let k = 0; k < head.length; k++) {
    col.length = 0;
    for (let e = head[k]; e >= 0; e = evNext[e]) col.push(e);
    if (!col.length) continue;
    col.sort((p, q) => evZ[p] - evZ[q]);
    let below = zBed;
    for (const e of col) {
      if (evN[e] > 0) below = evZ[e];
      else if (evN[e] < OVERHANG_NZ && evZ[e] - below > MIN_GAP) supportVol += (evZ[e] - below) * cell * cell;
    }
  }
  return { volume: Math.abs(vol), area, supportVol };
}

export function weights(m, infill) {
  if (!(m.volume > 0) || !(m.area > 0)) return null;
  const k = Math.max(0, 1 - SHELL_MM / (3 * m.volume / m.area));
  const inner = m.volume * k * k * k;
  const part = ((m.volume - inner) + infill * inner) * PLA_DENSITY / 1000;
  const support = m.supportVol * SUPPORT_DENSITY * PLA_DENSITY / 1000;
  return { part, support, needsSupport: support >= 0.1 && m.supportVol > 0.005 * m.volume };
}

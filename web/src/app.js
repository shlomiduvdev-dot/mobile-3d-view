import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { ThreeMFLoader } from 'three/addons/loaders/3MFLoader.js';
import { unzipSync, strFromU8 } from 'three/addons/libs/fflate.module.js';
import { measureRound, hasTopo, triCount, MAX_TRIS, resetTopo } from './round.js';
import { massProps, weights } from './mass.js';
import { T, lang, applyStatic } from './i18n.js';
import { initTour } from './tour.js';
import { initAccess, isLocked } from './access.js';

applyStatic();

const $ = (id) => document.getElementById(id);
const stage = $('stage');

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x14171c);
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 10000);
camera.up.set(0, 0, 1);
camera.position.set(120, -120, 90);
scene.add(camera);

scene.add(new THREE.HemisphereLight(0xffffff, 0x3a4048, 1.1));
const key = new THREE.DirectionalLight(0xffffff, 1.6);
key.position.set(1, 1.5, 2);
camera.add(key);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;
controls.zoomToCursor = true;

let model = null, boxHelper = null, grid = null, bbox = null, mass = null;

// ---- viewport backdrop: dark by default, light for dark models (or when the user switches) ----
const BACKDROP = {
  dark: { bg: 0x14171c, gridMain: 0x4b5563, gridFine: 0x2a3038, box: 0x6fd3ff },
  light: { bg: 0xe9edf2, gridMain: 0x8a94a3, gridFine: 0xc6ccd5, box: 0x0b7fb8 },
};
let lightBg = false, gridInfo = null;
const backdrop = () => (lightBg ? BACKDROP.light : BACKDROP.dark);

function makeGrid() {
  const c = backdrop();
  const g = new THREE.GridHelper(gridInfo.cells * gridInfo.step, gridInfo.cells, c.gridMain, c.gridFine);
  g.rotation.x = Math.PI / 2;
  g.position.copy(gridInfo.pos);
  return g;
}

function applyBackdrop() {
  const c = backdrop();
  scene.background.setHex(c.bg);
  stage.classList.toggle('light', lightBg);
  $('bgToggle').setAttribute('aria-pressed', lightBg);
  if (boxHelper) boxHelper.material.color.setHex(c.box);
  if (grid && gridInfo) { scene.remove(grid); dispose(grid); grid = makeGrid(); scene.add(grid); }
}

// average brightness of the model's own colours, weighted by triangle count
function modelIsDark() {
  let sum = 0, n = 0;
  model.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry, tris = (g.index ? g.index.count : g.attributes.position.count) / 3;
    const mats = [].concat(o.material);
    mats.forEach((m) => {
      const known = m.color && !m.vertexColors && !m.map;
      const lum = known ? 0.2126 * m.color.r + 0.7152 * m.color.g + 0.0722 * m.color.b : 0.5;
      sum += lum * tris / mats.length;
      n += tris / mats.length;
    });
  });
  return n > 0 && sum / n < 0.12;
}

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);
resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });

const defaultMat = () => new THREE.MeshStandardMaterial({ color: 0xf2a33a, roughness: 0.55, metalness: 0.05, side: THREE.DoubleSide });

function dispose(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) [].concat(o.material).forEach((m) => m.dispose());
  });
}

function clearModel() {
  clearMeasure();
  laid = false;
  if ($('lay')) renderLay();
  for (const o of [model, boxHelper, grid]) if (o) { scene.remove(o); dispose(o); }
  model = boxHelper = grid = null;
}

function setView(dir) {
  if (!bbox) return;
  const c = bbox.getCenter(new THREE.Vector3());
  const r = bbox.getSize(new THREE.Vector3()).length() / 2 || 1;
  const fov = THREE.MathUtils.degToRad(camera.fov);
  const fit = Math.min(fov, 2 * Math.atan(Math.tan(fov / 2) * camera.aspect));
  const dist = (r / Math.sin(fit / 2)) * 1.1;
  camera.near = dist / 200; camera.far = dist * 50;
  camera.updateProjectionMatrix();
  const d = new THREE.Vector3(...dir).normalize();
  camera.position.copy(c).addScaledVector(d, dist);
  controls.target.copy(c);
  controls.minDistance = r / 50; controls.maxDistance = dist * 10;
  controls.update();
}
const VIEWS = { iso: [1, -1, 0.8], top: [0, -0.0001, 1], front: [0, -1, 0], side: [1, 0, 0] };

const fmt = (v) => (v >= 100 ? v.toFixed(1) : v.toFixed(2));

function show(obj, name) {
  clearModel();
  model = obj;
  scene.add(model);
  model.updateMatrixWorld(true);
  if (new THREE.Box3().setFromObject(model).isEmpty()) { clearModel(); throw new Error(T.noGeom); }
  lightBg = modelIsDark();
  baseQuat = model.quaternion.clone();
  basePos = model.position.clone();
  $('fname').textContent = name;
  document.body.classList.add('loaded');
  refresh();
}

// recompute everything that depends on how the model sits on the bed
function refresh() {
  for (const o of [boxHelper, grid]) if (o) { scene.remove(o); dispose(o); }
  clearMeasure();
  resetTopo();
  model.updateMatrixWorld(true);
  bbox = new THREE.Box3().setFromObject(model);
  const size = bbox.getSize(new THREE.Vector3());
  let tris = 0;
  model.traverse((o) => { if (o.isMesh) { const g = o.geometry; tris += (g.index ? g.index.count : g.attributes.position.count) / 3; } });

  boxHelper = new THREE.Box3Helper(bbox, backdrop().box);
  boxHelper.visible = $('boxToggle').getAttribute('aria-pressed') === 'true';
  scene.add(boxHelper);

  const span = Math.max(size.x, size.y) * 2;
  const step = Math.pow(10, Math.floor(Math.log10(span / 4 || 1)));
  const cells = Math.max(2, Math.ceil(span / step / 2) * 2);
  const c = bbox.getCenter(new THREE.Vector3());
  gridInfo = { cells, step, pos: new THREE.Vector3(c.x, c.y, bbox.min.z) };
  grid = makeGrid();
  scene.add(grid);
  applyBackdrop();

  $('dx').textContent = fmt(size.x);
  $('dy').textContent = fmt(size.y);
  $('dz').textContent = fmt(size.z);
  $('meta').textContent = T.meta(Math.round(tris).toLocaleString(lang === 'he' ? 'he-IL' : 'en-US'), step);
  resize();
  setView(VIEWS.iso);
  mass = null;
  renderWeight();
  const current = model, q = model.quaternion.clone();
  setTimeout(() => {
    if (model !== current || !model.quaternion.equals(q)) return;
    try { mass = massProps(model, bbox); } catch (e) { console.error(e); mass = { volume: 0, area: 0, supportVol: 0 }; }
    renderWeight();
  }, 60);
}

// ---- lay the model on a tapped face ----
let laying = false, baseQuat = null, basePos = null, laid = false;
function renderLay() {
  $('lay').hidden = !laying;
  $('layToggle').setAttribute('aria-pressed', laying);
  $('laytext').textContent = laid ? T.layDone : T.layPrompt;
  $('layreset').disabled = !laid;
}
function layOnFace(clientX, clientY) {
  const saved = mode; mode = 'face';
  const hit = pick(clientX, clientY);
  mode = saved;
  if (!hit) return;
  const q = new THREE.Quaternion().setFromUnitVectors(hit.normal, new THREE.Vector3(0, 0, -1));
  model.quaternion.premultiply(q);
  model.position.applyQuaternion(q);
  laid = true;
  refresh();
  renderLay();
}
function resetLay() {
  if (!model || !laid) return;
  model.quaternion.copy(baseQuat);
  model.position.copy(basePos);
  laid = false;
  refresh();
  renderLay();
}

const g1 = (v) => (v >= 100 ? Math.round(v).toString() : v.toFixed(1));
function renderWeight() {
  const w = mass && weights(mass, Number($('infill').value) / 100);
  const set = (id, v, unit) => { $(id).textContent = v; $(id + 'u').hidden = !unit; };
  $('wsupcard').classList.remove('dim-off');
  document.querySelector('.whead').classList.toggle('err', !!mass && !w);
  $('wtitle').textContent = mass && !w ? T.noVol : T.wTitle;
  if (!w) {
    const v = mass ? '–' : '…';
    set('wpart', v, false); set('wsup', v, false); set('wtotal', v, false);
    return;
  }
  set('wpart', g1(w.part), true);
  if (w.needsSupport) set('wsup', g1(w.support), true);
  else { set('wsup', T.notNeeded, false); $('wsupcard').classList.add('dim-off'); }
  set('wtotal', g1(w.part + (w.needsSupport ? w.support : 0)), true);
}

function parseSTL(buf) {
  const g = new STLLoader().parse(buf);
  g.computeVertexNormals();
  const m = defaultMat();
  if (g.hasColors) m.vertexColors = true;
  return new THREE.Mesh(g, m);
}

// Bambu Studio / OrcaSlicer keep colours outside the standard 3MF materials:
// each part has an extruder number, and the project lists a colour per filament.
function applySlicerColors(buf, group) {
  let files;
  try {
    files = unzipSync(new Uint8Array(buf), { filter: (f) => /^(Metadata\/(model_settings|project_settings)\.config|3D\/3dmodel\.model)$/i.test(f.name) });
  } catch (e) { return false; }
  const find = (name) => { const k = Object.keys(files).find((x) => x.toLowerCase() === name); return k ? strFromU8(files[k]) : null; };
  const ms = find('metadata/model_settings.config'), ps = find('metadata/project_settings.config'), main = find('3d/3dmodel.model');
  if (!ms || !ps || !main) return false;
  let colours;
  try { colours = JSON.parse(ps).filament_colour; } catch (e) { return false; }
  if (!Array.isArray(colours) || !colours.length) return false;
  const xml = (t) => new DOMParser().parseFromString(t, 'application/xml');
  const extruderOf = (el) => {
    const m = Array.from(el.children).find((c) => c.tagName === 'metadata' && c.getAttribute('key') === 'extruder');
    return m ? parseInt(m.getAttribute('value'), 10) : NaN;
  };
  const cfg = {};
  Array.from(xml(ms).getElementsByTagName('object')).forEach((o) => {
    const parts = {};
    Array.from(o.getElementsByTagName('part')).forEach((p) => { parts[p.getAttribute('id')] = extruderOf(p); });
    cfg[o.getAttribute('id')] = { ext: extruderOf(o), parts };
  });
  const doc = xml(main);
  const components = {};
  Array.from(doc.getElementsByTagName('object')).forEach((o) => {
    components[o.getAttribute('id')] = Array.from(o.getElementsByTagName('component')).map((c) => c.getAttribute('objectid'));
  });
  const items = Array.from(doc.getElementsByTagName('item')).map((i) => i.getAttribute('objectid'));
  if (items.length !== group.children.length) return false;
  const paint = (obj, ext) => {
    const hex = colours[(ext || 1) - 1];
    if (typeof hex !== 'string' || !/^#[0-9a-f]{6}/i.test(hex)) return false;
    obj.traverse((o) => {
      if (!o.isMesh) return;
      [].concat(o.material).forEach((m) => m.dispose());
      o.material = defaultMat();
      o.material.flatShading = true;
      o.material.color.set(hex.slice(0, 7));
    });
    return true;
  };
  let any = false;
  items.forEach((id, k) => {
    const c = cfg[id], node = group.children[k], comps = components[id] || [];
    if (!c) return;
    if (comps.length && comps.length === node.children.length) {
      comps.forEach((pid, j) => { any = paint(node.children[j], c.parts[pid] || c.ext) || any; });
    } else {
      any = paint(node, c.ext) || any;
    }
  });
  return any;
}

function parse3MF(buf) {
  const group = new ThreeMFLoader().parse(buf);
  let slicer = false;
  try { slicer = applySlicerColors(buf, group); } catch (e) { console.error(e); }
  group.traverse((o) => {
    if (!o.isMesh) return;
    if (!o.geometry.attributes.normal) o.geometry.computeVertexNormals();
    // a file with no colour information gets the app's default colour instead of plain white
    const mats = [].concat(o.material);
    const blank = !slicer && mats.every((m) => (!m.name || m.name === THREE.Loader.DEFAULT_MATERIAL_NAME) && !m.map && !m.vertexColors && m.color && m.color.getHex() === 0xffffff);
    if (blank) { mats.forEach((m) => m.dispose()); o.material = defaultMat(); o.material.flatShading = true; }
    [].concat(o.material).forEach((m) => { m.side = THREE.DoubleSide; });
  });
  return group;
}

let occtPromise = null;
function loadOcct() {
  if (!occtPromise) {
    occtPromise = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'occt-import-js.js';
      s.onload = () => window.occtimportjs({ locateFile: (f) => f }).then(res, rej);
      s.onerror = () => rej(new Error(T.stepEngineFail));
      document.head.appendChild(s);
    }).catch((e) => { occtPromise = null; throw e; });
  }
  return occtPromise;
}

async function parseSTEP(buf) {
  status(T.stepLoading);
  const occt = await loadOcct();
  status(T.stepConvert);
  await new Promise((r) => setTimeout(r, 30));
  const result = occt.ReadStepFile(new Uint8Array(buf), { linearUnit: 'millimeter' });
  if (!result || !result.success || !result.meshes.length) throw new Error(T.stepFail);
  const group = new THREE.Group();
  for (const m of result.meshes) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.attributes.normal) g.setAttribute('normal', new THREE.Float32BufferAttribute(m.attributes.normal.array, 3));
    if (m.index) g.setIndex(new THREE.BufferAttribute(Uint32Array.from(m.index.array), 1));
    if (!m.attributes.normal) g.computeVertexNormals();
    const mat = defaultMat();
    if (m.color) mat.color.setRGB(m.color[0], m.color[1], m.color[2]);
    group.add(new THREE.Mesh(g, mat));
  }
  return group;
}

function status(msg, isError) {
  const el = $('status');
  el.textContent = msg || '';
  el.hidden = !msg;
  el.classList.toggle('error', !!isError);
}

// ---- measuring: between two faces (perpendicular) or two points ----
const measureGroup = new THREE.Group();
scene.add(measureGroup);
let measuring = false, mode = 'face', picks = [], roundMsg = '';

const raycaster = new THREE.Raycaster();
const SNAP_PX = 16, PARALLEL = Math.cos(THREE.MathUtils.degToRad(1.5));
const FACE_COLORS = [0x3ddc97, 0x4da3ff];

function emptyGroup() {
  while (measureGroup.children.length) {
    const o = measureGroup.children.pop();
    o.geometry.dispose(); o.material.dispose();
  }
}

function clearMeasure() {
  picks = []; roundMsg = '';
  emptyGroup();
  renderMeasureText();
}

function faceResult() {
  const [a, b] = picks;
  const dot = Math.abs(a.normal.dot(b.normal));
  const signed = b.point.clone().sub(a.point).dot(a.normal);
  const foot = b.point.clone().addScaledVector(a.normal, -signed);
  return { parallel: dot >= PARALLEL, angle: THREE.MathUtils.radToDeg(Math.acos(Math.min(1, dot))), dist: Math.abs(signed), from: foot, to: b.point };
}

function renderMeasureText() {
  const el = $('measure');
  if (!el) return;
  el.hidden = !measuring;
  document.querySelectorAll('[data-mode]').forEach((x) => x.setAttribute('aria-pressed', x.dataset.mode === mode));
  if (!measuring) return;
  const t = $('mtext');
  if (mode === 'round') {
    const r = picks[0];
    if (!r) t.textContent = roundMsg || T.roundPrompt;
    else if (r.closed) t.innerHTML = '<b>Ø ' + fmt(2 * r.r) + '</b> ' + T.mm + ' <span class="rtl">' + (r.concave ? T.hole : T.cylinder) + ' · ' + T.radius + ' ' + fmt(r.r) + ' ' + T.mm + '</span>';
    else t.innerHTML = '<b>R ' + fmt(r.r) + '</b> ' + T.mm + ' <span class="rtl">' + (r.concave ? T.innerR : T.outerR) + ' · ' + T.arc + ' ' + Math.round(r.arc) + '° · ' + T.diameter + ' ' + fmt(2 * r.r) + ' ' + T.mm + '</span>';
  } else if (picks.length === 0) t.textContent = T.tapFirst[mode];
  else if (picks.length === 1) t.textContent = T.tapSecond[mode];
  else if (mode === 'face') {
    const r = faceResult();
    t.innerHTML = '<b>' + fmt(r.dist) + '</b> ' + T.mm + ' <span class="rtl">' + (r.parallel ? T.parallel : T.notParallel(r.angle.toFixed(1))) + '</span>';
  } else {
    const d = picks[1].point.clone().sub(picks[0].point);
    t.innerHTML = '<b>' + fmt(d.length()) + '</b> ' + T.mm + ' <span>X ' + fmt(Math.abs(d.x)) + ' · Y ' + fmt(Math.abs(d.y)) + ' · Z ' + fmt(Math.abs(d.z)) + '</span>';
  }
}

function overlayTris(tris, color) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(tris, 3));
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  m.renderOrder = 10;
  measureGroup.add(m);
}

function drawRound(r) {
  overlayTris(r.tris, FACE_COLORS[0]);
  const ring = [];
  for (let i = 0; i <= 96; i++) {
    const a = i / 96 * Math.PI * 2;
    ring.push(r.center.clone().addScaledVector(r.e1, Math.cos(a) * r.r).addScaledVector(r.e2, Math.sin(a) * r.r));
  }
  const mat = { color: 0xff4d6d, depthTest: false, transparent: true };
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ring), new THREE.LineBasicMaterial(mat));
  const dot = new THREE.Points(new THREE.BufferGeometry().setFromPoints([r.center]), new THREE.PointsMaterial({ ...mat, size: 10, sizeAttenuation: false }));
  line.renderOrder = dot.renderOrder = 11;
  measureGroup.add(line, dot);
}

function overlayLine(points) {
  const g = new THREE.BufferGeometry().setFromPoints(points);
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xff4d6d, size: 12, sizeAttenuation: false, depthTest: false, transparent: true }));
  pts.renderOrder = 11;
  measureGroup.add(pts);
  if (points.length === 2) {
    const l = new THREE.Line(g.clone(), new THREE.LineBasicMaterial({ color: 0xff4d6d, depthTest: false, transparent: true }));
    l.renderOrder = 11;
    measureGroup.add(l);
  }
}

function drawMeasure() {
  emptyGroup();
  if (!picks.length) return;
  if (mode === 'round') drawRound(picks[0]);
  else if (mode === 'face') {
    picks.forEach((p, i) => overlayTris(p.tris, FACE_COLORS[i]));
    if (picks.length === 2) { const r = faceResult(); overlayLine([r.from, r.to]); }
  } else {
    overlayLine(picks.map((p) => p.point));
  }
}

function toScreen(v, rect) {
  const p = v.clone().project(camera);
  return new THREE.Vector2((p.x + 1) / 2 * rect.width, (1 - p.y) / 2 * rect.height);
}

// all triangles of the mesh lying in the same plane as the tapped triangle (world space)
function coplanarTris(mesh, point, normal) {
  const geo = mesh.geometry, pos = geo.attributes.position, idx = geo.index;
  const n = idx ? idx.count : pos.count;
  const eps = Math.max(bbox.getSize(new THREE.Vector3()).length() * 1e-4, 1e-5);
  const mw = mesh.matrixWorld;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
  const out = [];
  for (let i = 0; i < n; i += 3) {
    const ia = idx ? idx.getX(i) : i, ib = idx ? idx.getX(i + 1) : i + 1, ic = idx ? idx.getX(i + 2) : i + 2;
    a.fromBufferAttribute(pos, ia).applyMatrix4(mw);
    if (Math.abs((a.x - point.x) * normal.x + (a.y - point.y) * normal.y + (a.z - point.z) * normal.z) > eps) continue;
    b.fromBufferAttribute(pos, ib).applyMatrix4(mw);
    c.fromBufferAttribute(pos, ic).applyMatrix4(mw);
    ab.subVectors(b, a); ac.subVectors(c, a); ab.cross(ac);
    const len = ab.length();
    if (len === 0 || Math.abs(ab.dot(normal)) / len < PARALLEL) continue;
    out.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  }
  return new Float32Array(out);
}

function pick(clientX, clientY) {
  if (!model) return null;
  const rect = renderer.domElement.getBoundingClientRect();
  const sx = clientX - rect.left, sy = clientY - rect.top;
  raycaster.setFromCamera(new THREE.Vector2(sx / rect.width * 2 - 1, -(sy / rect.height) * 2 + 1), camera);
  const hit = raycaster.intersectObject(model, true)[0];
  if (!hit || !hit.face) return null;
  if (mode === 'round') return { round: true, mesh: hit.object, faceIndex: hit.faceIndex, point: hit.point.clone() };
  const pos = hit.object.geometry.attributes.position, mw = hit.object.matrixWorld;
  const va = new THREE.Vector3().fromBufferAttribute(pos, hit.face.a).applyMatrix4(mw);
  const vb = new THREE.Vector3().fromBufferAttribute(pos, hit.face.b).applyMatrix4(mw);
  const vc = new THREE.Vector3().fromBufferAttribute(pos, hit.face.c).applyMatrix4(mw);
  if (mode === 'face') {
    const normal = vb.clone().sub(va).cross(vc.clone().sub(va)).normalize();
    if (normal.lengthSq() === 0) return null;
    return { point: hit.point.clone(), normal, tris: coplanarTris(hit.object, hit.point, normal) };
  }
  let best = hit.point.clone(), bestD = SNAP_PX;
  for (const v of [va, vb, vc]) {
    const d = toScreen(v, rect).distanceTo(new THREE.Vector2(sx, sy));
    if (d < bestD) { bestD = d; best = v; }
  }
  return { point: best };
}

async function addMeasurePoint(clientX, clientY) {
  const hit = pick(clientX, clientY);
  if (!hit) return;
  if (hit.round) {
    picks = []; roundMsg = '';
    if (triCount(hit.mesh) > MAX_TRIS) roundMsg = T.tooBig;
    else {
      if (!hasTopo(hit.mesh) && triCount(hit.mesh) > 150000) {
        $('mtext').textContent = T.analyzing;
        await new Promise((r) => setTimeout(r, 40));
      }
      let r = null;
      try { r = measureRound(hit.mesh, hit.faceIndex, hit.point, bbox); } catch (e) { console.error(e); }
      if (r) picks = [r];
      else roundMsg = T.noRound;
    }
  } else {
    if (picks.length >= 2) picks = [];
    picks.push(hit);
  }
  drawMeasure();
  renderMeasureText();
}

let down = null;
renderer.domElement.addEventListener('pointerdown', (e) => {
  down = e.isPrimary ? { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId } : null;
});
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!down || e.pointerId !== down.id) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  const quick = performance.now() - down.t < 500;
  down = null;
  if (!(moved < 8 && quick)) return;
  if (laying) layOnFace(e.clientX, e.clientY);
  else if (measuring) addMeasurePoint(e.clientX, e.clientY);
});

function sniff(buf, name) {
  const ext = (name.includes('.') ? name.split('.').pop() : '').toLowerCase();
  if (ext === 'stl' || ext === '3mf') return ext;
  if (ext === 'step' || ext === 'stp') return 'step';
  const b = new Uint8Array(buf, 0, Math.min(buf.byteLength, 64));
  const head = String.fromCharCode.apply(null, b);
  if (head.startsWith('PK')) return '3mf';
  if (head.includes('ISO-10303-21')) return 'step';
  if (ext === '' || ext === 'bin') return 'stl';
  throw new Error(T.unsupported(ext));
}

async function openBuffer(buf, name) {
  const kind = sniff(buf, name);
  let obj;
  if (kind === 'stl') obj = parseSTL(buf);
  else if (kind === '3mf') obj = parse3MF(buf);
  else obj = await parseSTEP(buf);
  show(obj, name);
  status('');
}

async function run(name, getBuf) {
  if (isLocked()) { status(T.lockedOpen, true); return; }
  status(T.opening(name));
  try { await openBuffer(await getBuf(), name); }
  catch (e) { console.error(e); status(e.message || T.openErr, true); }
}

function openFile(file) { if (file) return run(file.name, () => file.arrayBuffer()); }

function openPending() {
  const host = window.AndroidHost;
  if (!host) return;
  const name = host.pendingName();
  if (!name) return;
  return run(name, async () => {
    const r = await fetch('/__opened?t=' + Date.now());
    if (!r.ok) throw new Error(T.pendingErr);
    return r.arrayBuffer();
  });
}

document.querySelectorAll('input.file').forEach((input) => input.addEventListener('change', () => { openFile(input.files[0]); input.value = ''; }));
document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => setView(VIEWS[b.dataset.view])));
$('boxToggle').addEventListener('click', (e) => {
  const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', on);
  if (boxHelper) boxHelper.visible = on;
});
function setTool(tool) {
  measuring = tool === 'measure';
  laying = tool === 'lay';
  $('measureToggle').setAttribute('aria-pressed', measuring);
  if (!measuring) clearMeasure();
  renderMeasureText();
  renderLay();
  resize();
}
$('measureToggle').addEventListener('click', () => setTool(measuring ? null : 'measure'));
$('layToggle').addEventListener('click', () => setTool(laying ? null : 'lay'));
$('bgToggle').addEventListener('click', () => { lightBg = !lightBg; applyBackdrop(); });
$('layreset').addEventListener('click', resetLay);
$('mclear').addEventListener('click', () => { clearMeasure(); });
document.querySelectorAll('[data-mode]').forEach((x) => x.addEventListener('click', () => { mode = x.dataset.mode; clearMeasure(); }));
$('infill').addEventListener('change', renderWeight);
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => { e.preventDefault(); openFile(e.dataTransfer.files[0]); });

window.__viewer = { openFile, openPending, tree: () => { const out = []; const walk = (o, d) => { out.push('  '.repeat(d) + o.type + ' name=' + JSON.stringify(o.name) + ' ud=' + JSON.stringify(o.userData) + (o.isMesh ? ' tris=' + (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3 + ' groups=' + o.geometry.groups.length : '')); o.children.forEach((c) => walk(c, d + 1)); }; if (model) walk(model, 0); return out.join('\n'); }, colors: () => { const out = []; if (model) model.traverse((o) => { if (o.isMesh) [].concat(o.material).forEach((m) => out.push('#' + m.color.getHexString() + (m.vertexColors ? '+vc' : ''))); }); return out.join(' '); }, project: (x, y, z) => { const r = renderer.domElement.getBoundingClientRect(); const p = toScreen(new THREE.Vector3(x, y, z), r); return [p.x + r.left, p.y + r.top]; } };
openPending();
initAccess((acc) => { if (acc.state === 'owned') { status(''); openPending(); } resize(); });
initTour();

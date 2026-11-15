// Recently opened files, kept on the device (IndexedDB) so they can be reopened without the original app or link.
const DB = 'm3dv-files', META = 'meta', DATA = 'data';
const MAX_FILES = 8, MAX_FILE_BYTES = 50e6, MAX_TOTAL_BYTES = 150e6;

function open() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => { r.result.createObjectStore(META, { keyPath: 'name' }); r.result.createObjectStore(DATA); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
const done = (tx) => new Promise((res, rej) => { tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error); });
const req = (r) => new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });

export async function listRecent() {
  try {
    const db = await open();
    const all = await req(db.transaction(META).objectStore(META).getAll());
    db.close();
    return all.sort((a, b) => b.time - a.time);
  } catch (e) { return []; }
}

export async function saveRecent(name, buf) {
  try {
    if (!buf || buf.byteLength > MAX_FILE_BYTES) return;
    const db = await open();
    let tx = db.transaction([META, DATA], 'readwrite');
    tx.objectStore(META).put({ name, size: buf.byteLength, time: Date.now() });
    tx.objectStore(DATA).put(buf, name);
    await done(tx);
    const all = (await req(db.transaction(META).objectStore(META).getAll())).sort((a, b) => b.time - a.time);
    let total = 0;
    const drop = [];
    all.forEach((f, i) => { total += f.size; if (i >= MAX_FILES || total > MAX_TOTAL_BYTES) drop.push(f.name); });
    if (drop.length) {
      tx = db.transaction([META, DATA], 'readwrite');
      drop.forEach((n) => { tx.objectStore(META).delete(n); tx.objectStore(DATA).delete(n); });
      await done(tx);
    }
    db.close();
  } catch (e) { /* storage is a convenience only */ }
}

export async function loadRecent(name) {
  try {
    const db = await open();
    const buf = await req(db.transaction(DATA).objectStore(DATA).get(name));
    db.close();
    return buf || null;
  } catch (e) { return null; }
}

export async function removeRecent(name) {
  try {
    const db = await open();
    const tx = db.transaction([META, DATA], 'readwrite');
    tx.objectStore(META).delete(name); tx.objectStore(DATA).delete(name);
    await done(tx);
    db.close();
  } catch (e) { /* ignore */ }
}

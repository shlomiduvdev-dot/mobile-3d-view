# Mobile 3D View

Android viewer for STL, 3MF and STEP files (`com.dfus3d.mobile3dview`).

- `app/` – the Android app. The viewer itself is a web page in `app/src/main/assets/www`, shown in a WebView.
- `web/` – source of that page (`npm install`, then bundle `src/app.js` with esbuild into `app.js`).
- `.github/workflows/build.yml` – builds a signed `.aab` (for Google Play) and `.apk` on every push to `main`.

## Signing

The build reads two repository secrets (Settings → Secrets and variables → Actions):

- `UPLOAD_KEYSTORE_BASE64` – the upload keystore, base64-encoded
- `UPLOAD_KEY_PASSWORD` – its password (key alias: `upload`)

## Purchase

14-day free trial from first install, then a one-time in-app product with ID `full_unlock`.

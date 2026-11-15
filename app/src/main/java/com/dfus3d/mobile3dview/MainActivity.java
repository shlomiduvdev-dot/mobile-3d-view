package com.dfus3d.mobile3dview;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.OpenableColumns;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

public class MainActivity extends Activity implements Billing.Listener {
    private static final int TRIAL_DAYS = 14;
    private static final long DAY_MS = 24L * 60 * 60 * 1000;
    private Billing billing;
    private long trialStart;
    private static final String HOST = "viewer.local";
    private static final int PICK = 1;
    private static final String[] MODEL_MIME_TYPES = {
            "model/*",
            "application/sla",
            "application/vnd.ms-pki.stl",
            "application/x-stl",
            "application/step",
            "application/STEP",
            "application/x-step",
            "application/vnd.ms-package.3dmanufacturing-3dmodel+xml",
            "application/x-3mf",
            "application/octet-stream"
    };
    private WebView web;
    private volatile Uri pendingUri;
    private volatile String pendingName = "";
    private boolean pageReady;
    private ValueCallback<Uri[]> chooser;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        web = new WebView(this);
        web.setBackgroundColor(0xFF14171C);
        // From Android 15 the app draws behind the status and navigation bars,
        // so keep the page inside the safe area.
        final FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF1D2128);
        root.addView(web, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        root.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override
            public WindowInsets onApplyWindowInsets(View v, WindowInsets in) {
                v.setPadding(in.getSystemWindowInsetLeft(), in.getSystemWindowInsetTop(), in.getSystemWindowInsetRight(), in.getSystemWindowInsetBottom());
                return in.consumeSystemWindowInsets();
            }
        });
        setContentView(root);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        web.addJavascriptInterface(new Host(), "AndroidHost");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest r) {
                return serve(r.getUrl());
            }
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, String url) {
                return !HOST.equals(Uri.parse(url).getHost());
            }
            @Override
            public void onPageFinished(WebView v, String url) {
                pageReady = true;
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (chooser != null) chooser.onReceiveValue(null);
                chooser = cb;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                // Android can only filter the picker by file type, not by extension. These are the types
                // 3D files are reported as; "octet-stream" is how many apps label STL/3MF/STEP files.
                i.putExtra(Intent.EXTRA_MIME_TYPES, MODEL_MIME_TYPES);
                try {
                    startActivityForResult(i, PICK);
                } catch (Exception e) {
                    chooser = null;
                    cb.onReceiveValue(null);
                }
                return true;
            }
        });
        SharedPreferences prefs = getSharedPreferences("access", MODE_PRIVATE);
        // The trial counts from the day the app was first installed on this device.
        trialStart = System.currentTimeMillis();
        try {
            trialStart = getPackageManager().getPackageInfo(getPackageName(), 0).firstInstallTime;
        } catch (Exception e) {
            // keep "now"
        }
        billing = new Billing(this, prefs, this);
        takeIntent(getIntent());
        web.loadUrl("https://" + HOST + "/index.html");
    }

    @Override
    protected void onResume() {
        super.onResume();
        billing.sync("update");
    }

    @Override
    protected void onDestroy() {
        billing.close();
        super.onDestroy();
    }

    @Override
    public void onBillingEvent(String reason) {
        if (pageReady) web.evaluateJavascript("window.__access&&window.__access('" + reason + "')", null);
    }

    private String accessJson() {
        long elapsed = Math.max(0, System.currentTimeMillis() - trialStart);
        int left = (int) Math.max(0, TRIAL_DAYS - elapsed / DAY_MS);
        String state = billing.isOwned() ? "owned" : (left > 0 ? "trial" : "expired");
        String price = billing.getPrice().replace("\\", "").replace("\"", "");
        return "{\"state\":\"" + state + "\",\"daysLeft\":" + left + ",\"price\":\"" + price + "\"}";
    }

    @Override
    protected void onNewIntent(Intent i) {
        super.onNewIntent(i);
        setIntent(i);
        if (takeIntent(i) && pageReady) {
            web.evaluateJavascript("window.__viewer&&window.__viewer.openPending()", null);
        }
    }

    private boolean takeIntent(Intent i) {
        if (i == null) return false;
        Uri u = null;
        if (Intent.ACTION_VIEW.equals(i.getAction())) {
            u = i.getData();
        } else if (Intent.ACTION_SEND.equals(i.getAction())) {
            Object o = i.getParcelableExtra(Intent.EXTRA_STREAM);
            if (o instanceof Uri) u = (Uri) o;
        }
        if (u == null) return false;
        pendingUri = u;
        pendingName = nameOf(u);
        return true;
    }

    private String nameOf(Uri u) {
        String n = null;
        if ("content".equals(u.getScheme())) {
            Cursor c = null;
            try {
                c = getContentResolver().query(u, null, null, null, null);
                if (c != null && c.moveToFirst()) {
                    int idx = c.getColumnIndex(OpenableColumns.DISPLAY_NAME);
                    if (idx >= 0) n = c.getString(idx);
                }
            } catch (Exception e) {
                // fall through to the path
            } finally {
                if (c != null) c.close();
            }
        }
        if (n == null || n.length() == 0) n = u.getLastPathSegment();
        if (n == null || n.length() == 0) n = "model";
        return n;
    }

    private WebResourceResponse serve(Uri url) {
        if (!HOST.equals(url.getHost())) {
            return new WebResourceResponse("text/plain", "utf-8", new ByteArrayInputStream(new byte[0]));
        }
        String path = url.getPath();
        if (path == null || path.equals("/")) path = "/index.html";
        try {
            if (path.equals("/__opened")) {
                Uri u = pendingUri;
                if (u == null) return notFound();
                InputStream in = getContentResolver().openInputStream(u);
                if (in == null) return notFound();
                return new WebResourceResponse("application/octet-stream", null, in);
            }
            String mime = "application/octet-stream";
            String enc = null;
            if (path.endsWith(".html")) { mime = "text/html"; enc = "utf-8"; }
            else if (path.endsWith(".js")) { mime = "text/javascript"; enc = "utf-8"; }
            else if (path.endsWith(".wasm")) { mime = "application/wasm"; }
            else if (path.endsWith(".txt")) { mime = "text/plain"; enc = "utf-8"; }
            return new WebResourceResponse(mime, enc, getAssets().open("www" + path));
        } catch (Exception e) {
            return notFound();
        }
    }

    private void sharePicture(String base64, String caption) {
        try {
            byte[] bytes = android.util.Base64.decode(base64, android.util.Base64.DEFAULT);
            File dir = new File(getCacheDir(), "shared");
            dir.mkdirs();
            File file = new File(dir, "mobile-3d-view.jpg");
            FileOutputStream out = new FileOutputStream(file);
            try {
                out.write(bytes);
            } finally {
                out.close();
            }
            Uri uri = androidx.core.content.FileProvider.getUriForFile(this, getPackageName() + ".files", file);
            Intent send = new Intent(Intent.ACTION_SEND);
            send.setType("image/jpeg");
            send.putExtra(Intent.EXTRA_STREAM, uri);
            send.putExtra(Intent.EXTRA_TEXT, caption);
            send.setClipData(android.content.ClipData.newRawUri("", uri));
            send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            startActivity(Intent.createChooser(send, null));
        } catch (Exception e) {
            if (pageReady) web.evaluateJavascript("window.__shareFailed&&window.__shareFailed()", null);
        }
    }

    private WebResourceResponse notFound() {
        WebResourceResponse r = new WebResourceResponse("text/plain", "utf-8", new ByteArrayInputStream(new byte[0]));
        r.setStatusCodeAndReasonPhrase(404, "Not Found");
        return r;
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req != PICK || chooser == null) return;
        Uri[] out = null;
        if (res == RESULT_OK && data != null && data.getData() != null) out = new Uri[]{data.getData()};
        chooser.onReceiveValue(out);
        chooser = null;
    }

    private class Host {
        @JavascriptInterface
        public String pendingName() {
            return pendingUri == null ? "" : pendingName;
        }

        @JavascriptInterface
        public String access() {
            return accessJson();
        }

        @JavascriptInterface
        public void buy() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    billing.buy();
                }
            });
        }

        @JavascriptInterface
        public void restore() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    billing.sync("restore");
                }
            });
        }

        /** Opens the phone's email app with a new message to the developer. */
        @JavascriptInterface
        public void contact(final String to, final String subject, final String body) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Intent mail = new Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:" + to));
                        mail.putExtra(Intent.EXTRA_SUBJECT, subject);
                        mail.putExtra(Intent.EXTRA_TEXT, body);
                        startActivity(mail);
                    } catch (Exception e) {
                        if (pageReady) web.evaluateJavascript("window.__contactFailed&&window.__contactFailed()", null);
                    }
                }
            });
        }

        /** Shares a JPEG (base64) through the system share sheet, e.g. to WhatsApp. */
        @JavascriptInterface
        public void shareImage(final String base64, final String caption) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    sharePicture(base64, caption);
                }
            });
        }

        @JavascriptInterface
        public String lang() {
            return java.util.Locale.getDefault().getLanguage();
        }
    }
}

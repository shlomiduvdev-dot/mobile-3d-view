package com.dfus3d.mobile3dview;

import android.app.Activity;
import android.content.SharedPreferences;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.AcknowledgePurchaseResponseListener;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.ProductDetailsResponseListener;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesResponseListener;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryProductDetailsResult;
import com.android.billingclient.api.QueryPurchasesParams;

import java.util.Collections;
import java.util.List;

/**
 * One-time "full version" purchase through Google Play.
 * The purchased flag is cached on the device so the app also opens offline,
 * and is re-checked against Google Play every time the app comes to the front.
 */
class Billing implements PurchasesUpdatedListener {
    /** Must match the in-app product ID created in Play Console. */
    static final String PRODUCT_ID = "full_unlock";
    private static final String PREF_OWNED = "owned";

    interface Listener {
        /** reason: "update", "restore", "pending" or "unavailable" */
        void onBillingEvent(String reason);
    }

    private final Activity activity;
    private final SharedPreferences prefs;
    private final Listener listener;
    private final BillingClient client;
    private ProductDetails details;
    private volatile String price = "";
    private boolean connecting;

    Billing(Activity activity, SharedPreferences prefs, Listener listener) {
        this.activity = activity;
        this.prefs = prefs;
        this.listener = listener;
        this.client = BillingClient.newBuilder(activity)
                .setListener(this)
                .enablePendingPurchases(PendingPurchasesParams.newBuilder().enableOneTimeProducts().build())
                .enableAutoServiceReconnection()
                .build();
    }

    boolean isOwned() {
        return prefs.getBoolean(PREF_OWNED, false);
    }

    String getPrice() {
        return price;
    }

    /** Connect if needed, then load the price and re-check the purchase. */
    void sync(final String reason) {
        if (client.isReady()) {
            queryProduct();
            queryPurchases(reason);
            return;
        }
        if (connecting) return;
        connecting = true;
        client.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(BillingResult result) {
                connecting = false;
                if (result.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                    queryProduct();
                    queryPurchases(reason);
                } else if ("restore".equals(reason)) {
                    notifyListener("unavailable");
                }
            }

            @Override
            public void onBillingServiceDisconnected() {
                connecting = false;
            }
        });
    }

    private void queryProduct() {
        QueryProductDetailsParams.Product product = QueryProductDetailsParams.Product.newBuilder()
                .setProductId(PRODUCT_ID)
                .setProductType(BillingClient.ProductType.INAPP)
                .build();
        QueryProductDetailsParams params = QueryProductDetailsParams.newBuilder()
                .setProductList(Collections.singletonList(product))
                .build();
        client.queryProductDetailsAsync(params, new ProductDetailsResponseListener() {
            @Override
            public void onProductDetailsResponse(BillingResult result, QueryProductDetailsResult response) {
                if (result.getResponseCode() != BillingClient.BillingResponseCode.OK) return;
                List<ProductDetails> list = response.getProductDetailsList();
                if (list == null || list.isEmpty()) return;
                details = list.get(0);
                ProductDetails.OneTimePurchaseOfferDetails offer = details.getOneTimePurchaseOfferDetails();
                String p = offer != null ? offer.getFormattedPrice() : "";
                if (!p.equals(price)) {
                    price = p;
                    notifyListener("update");
                }
            }
        });
    }

    private void queryPurchases(final String reason) {
        QueryPurchasesParams params = QueryPurchasesParams.newBuilder()
                .setProductType(BillingClient.ProductType.INAPP)
                .build();
        client.queryPurchasesAsync(params, new PurchasesResponseListener() {
            @Override
            public void onQueryPurchasesResponse(BillingResult result, List<Purchase> purchases) {
                if (result.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                    if ("restore".equals(reason)) notifyListener("unavailable");
                    return;
                }
                // Google Play's answer is authoritative: it also clears the flag after a refund.
                boolean owned = handle(purchases);
                prefs.edit().putBoolean(PREF_OWNED, owned).apply();
                notifyListener(reason);
            }
        });
    }

    /** Returns true if the full version is paid for; acknowledges new purchases. */
    private boolean handle(List<Purchase> purchases) {
        boolean owned = false;
        if (purchases == null) return false;
        for (Purchase p : purchases) {
            if (!p.getProducts().contains(PRODUCT_ID)) continue;
            if (p.getPurchaseState() != Purchase.PurchaseState.PURCHASED) continue;
            owned = true;
            if (!p.isAcknowledged()) {
                AcknowledgePurchaseParams ack = AcknowledgePurchaseParams.newBuilder()
                        .setPurchaseToken(p.getPurchaseToken())
                        .build();
                client.acknowledgePurchase(ack, new AcknowledgePurchaseResponseListener() {
                    @Override
                    public void onAcknowledgePurchaseResponse(BillingResult result) {
                        // Nothing to do: an unacknowledged purchase is retried on the next sync.
                    }
                });
            }
        }
        return owned;
    }

    /** Opens Google Play's purchase sheet. Must be called on the main thread. */
    void buy() {
        if (!client.isReady() || details == null) {
            sync("update");
            notifyListener("unavailable");
            return;
        }
        BillingFlowParams.ProductDetailsParams item = BillingFlowParams.ProductDetailsParams.newBuilder()
                .setProductDetails(details)
                .build();
        BillingFlowParams flow = BillingFlowParams.newBuilder()
                .setProductDetailsParamsList(Collections.singletonList(item))
                .build();
        BillingResult result = client.launchBillingFlow(activity, flow);
        if (result.getResponseCode() == BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED) {
            sync("update");
        } else if (result.getResponseCode() != BillingClient.BillingResponseCode.OK) {
            notifyListener("unavailable");
        }
    }

    @Override
    public void onPurchasesUpdated(BillingResult result, List<Purchase> purchases) {
        int code = result.getResponseCode();
        if (code == BillingClient.BillingResponseCode.OK && purchases != null) {
            if (handle(purchases)) {
                prefs.edit().putBoolean(PREF_OWNED, true).apply();
                notifyListener("update");
            } else {
                notifyListener("pending");
            }
        } else if (code == BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED) {
            sync("update");
        }
        // USER_CANCELED and errors: leave the screen as it is.
    }

    private void notifyListener(final String reason) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                listener.onBillingEvent(reason);
            }
        });
    }

    void close() {
        client.endConnection();
    }
}

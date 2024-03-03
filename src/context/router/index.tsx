import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "src/components/atomics/loader";
import App from "src/App";

const Checkout = lazy(() => import("@templates/checkout"));
const NotFound = lazy(() => import("@templates/not_found"));
const Products = lazy(() => import("@templates/products"));
const PurchaseCompleted = lazy(() => import("@templates/purchase_completed"));

import { useProductContext } from "@context/products";

export function Router() {
  const { isLoading } = useProductContext();

  return (
    <Routes>
      <Route element={<App />}>
        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Route path="/" element={<Products />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/finish" element={<PurchaseCompleted />} />
            <Route path="/checkout" element={<Checkout />} />
          </Suspense>
        )}
      </Route>
    </Routes>
  );
}

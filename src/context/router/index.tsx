import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Loader } from "src/components/atomics/loader";
import App from "src/App";

const Checkout = lazy(() => import("@templates/checkout"));
const NotFound = lazy(() => import("@templates/not_found"));
const Products = lazy(() => import("@templates/products"));
const PurchaseCompleted = lazy(() => import("@templates/purchase_completed"));

import { useProductContext } from "@context/products";

const CommonSuspense = ({ children }: React.PropsWithChildren) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export function Router() {
  const { isLoading } = useProductContext();

  return (
    <Routes>
      <Route element={<App />}>
        {isLoading ? (
          <Route path="*" element={<Loader />} />
        ) : (
          <>
            <Route
              path="/"
              element={
                <CommonSuspense>
                  <Products />
                </CommonSuspense>
              }
            />
            <Route
              path="/404"
              element={
                <CommonSuspense>
                  <NotFound />
                </CommonSuspense>
              }
            />
            <Route
              path="/finish"
              element={
                <CommonSuspense>
                  <PurchaseCompleted />
                </CommonSuspense>
              }
            />
            <Route
              path="/checkout"
              element={
                <CommonSuspense>
                  <Checkout />
                </CommonSuspense>
              }
            />
            <Route path="*" element={<Navigate to={"/404"} />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

import { ProductsContextProvider } from "@context/products";
import { Header } from "@organisms/header";
import { MainPage } from "@templates/main";
import { NotFound } from "@templates/not_found";
import { Products } from "@templates/products";
import { PurchaseCompleted } from "@templates/purchase_completed";

function App() {
  return (
    <ProductsContextProvider>
      <MainPage>
        <Header />

        {/* Router */}
        {/* <Products /> */}
        {/* <NotFound /> */}
        {/* <PurchaseCompleted /> */}
      </MainPage>
    </ProductsContextProvider>
  );
}

export default App;

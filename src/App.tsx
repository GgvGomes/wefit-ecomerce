import { ProductsContextProvider } from "@context/products";
import { Header } from "@organisms/header";
import { MainPage } from "@templates/main";
import { Products } from "@templates/products";

function App() {
  return (
    <ProductsContextProvider>
      <MainPage>
        <Header />

        {/* Router */}
        <Products />
      </MainPage>
    </ProductsContextProvider>
  );
}

export default App;

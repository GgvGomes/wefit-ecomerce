import { ProductsContextProvider } from "@context/products";
import { Header } from "@organisms/header";
import { MainPage } from "@templates/main";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <ProductsContextProvider>
      <MainPage>
        <Header />

        <Outlet />
      </MainPage>
    </ProductsContextProvider>
  );
}

export default App;

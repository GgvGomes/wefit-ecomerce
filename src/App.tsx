import { MoviesContextProvider } from "@context/movies";
import { Header } from "@organisms/header";
import { MainPage } from "@templates/main";

function App() {
  return (
    <MoviesContextProvider>
      <MainPage>
        <Header />
      </MainPage>
    </MoviesContextProvider>
  );
}

export default App;

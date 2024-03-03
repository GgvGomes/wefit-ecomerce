import { createContext, useContext, useEffect, useState } from "react";

interface IMovie {}

interface MoviesContextData {
  isLoading: boolean;

  movies: IMovie[];
  myCar: IMovie[];
  setMyCar: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export const MoviesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [myCar, setMyCar] = useState<IMovie[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(movies);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        myCar,
        movies,
        setMyCar,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovieContext() {
  const context = useContext(MoviesContext);
  return context;
}

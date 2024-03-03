import { createContext, useContext, useEffect, useState } from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface MoviesContextData {
  isLoading: boolean;

  products: IProduct[];
  myCar: IProduct[];
  setMyCar: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ProductsContext = createContext<MoviesContextData>({} as MoviesContextData);

export const ProductsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [myCar, setMyCar] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        myCar,
        products,
        setMyCar,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductsContext);
  return context;
}

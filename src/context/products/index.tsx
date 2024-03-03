import { createContext, useCallback, useContext, useEffect, useState } from "react";

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

  addItemCar: (id: number) => void;
  removeItemCar: (id: number) => void;
}

const ProductsContext = createContext<MoviesContextData>({} as MoviesContextData);

export const ProductsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [myCar, setMyCar] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addItemCar = useCallback(
    (id: number) => {
      const productAdded = products.find((p) => p.id === id);

      if (myCar.find((p) => p.id === id)) return;
      else if (productAdded) setMyCar([...myCar, productAdded]);
    },
    [products, myCar]
  );

  const removeItemCar = useCallback(
    (id: number) => {
      const productRemoved = myCar.find((p) => p.id === id);
      if (productRemoved) setMyCar(myCar.filter((p) => p.id !== id));
      else return;
    },
    [myCar]
  );

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
        addItemCar,
        removeItemCar,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductsContext);
  return context;
}

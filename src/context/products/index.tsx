import { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IProductsCar extends IProduct {
  quantity: number;
}

interface MoviesContextData {
  isLoading: boolean;

  products: IProduct[];
  myCar: IProductsCar[];
  setMyCar: React.Dispatch<React.SetStateAction<IProductsCar[]>>;

  addItemCar: (id: number) => void;
  removeItemCar: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  resetMyCar: () => void;
}

const ProductsContext = createContext<MoviesContextData>({} as MoviesContextData);

export const ProductsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [myCar, setMyCar] = useState<IProductsCar[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addItemCar = useCallback(
    (id: number) => {
      const productAdded = products.find((p) => p.id === id);
      const productInCar = myCar.find((p) => p.id === id);

      if (productInCar)
        setMyCar((old) =>
          old.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      else if (productAdded) setMyCar([...myCar, { ...productAdded, quantity: 1 }]);
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

  const decreaseQuantity = useCallback(
    (id: number) => {
      const productInCar = myCar.find((p) => p.id === id);
      if (productInCar)
        setMyCar((old) =>
          old
            .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
            .filter((item) => item.quantity > 0)
        );
    },
    [myCar]
  );

  const resetMyCar = useCallback(() => {
    setMyCar([]);
  }, []);

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
        decreaseQuantity,
        resetMyCar,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductsContext);
  return context;
}

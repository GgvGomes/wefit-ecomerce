import { LessIcon } from "@icons/actions/less";
import { InputNumberStyled, Quantity } from "./styles";
import { PlusIcon } from "@icons/actions/plus";
import { useState } from "react";
import { useProductContext } from "@context/products";

interface IInputNumberProps {
  defaultValue: number;
  id: number;
}

export function InputNumber({ defaultValue, id }: IInputNumberProps) {
  const [quantity, setQuantity] = useState(defaultValue),
    { addItemCar, decreaseQuantity } = useProductContext();

  const decrement = () => {
    decreaseQuantity(id);
    setQuantity((old) => old - 1);
  };
  const increment = () => {
    addItemCar(id);
    setQuantity((old) => old + 1);
  };

  return (
    <Quantity>
      {/* Decrease */}
      <LessIcon onClick={decrement} />
      {/* Input */}
      <InputNumberStyled type="number" value={quantity} disabled />
      {/* Add */}
      <PlusIcon onClick={increment} />
    </Quantity>
  );
}

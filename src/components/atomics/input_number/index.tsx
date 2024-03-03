import { LessIcon } from "@icons/actions/less";
import { InputNumberStyled, Quantity } from "./styles";
import { PlusIcon } from "@icons/actions/plus";
import { useState } from "react";

interface IInputNumberProps {
  defaultValue: number;
  id: number;
}

export function InputNumber({ defaultValue, id }: IInputNumberProps) {
  const [quantity, setQuantity] = useState(defaultValue);

  return (
    <Quantity>
      {/* Decrease */}
      <LessIcon onClick={() => setQuantity((old) => old - 1)} />
      {/* Input */}
      <InputNumberStyled type="number" value={quantity} disabled />
      {/* Add */}
      <PlusIcon onClick={() => setQuantity((old) => old + 1)} />
    </Quantity>
  );
}

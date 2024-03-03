import { InputNumber } from "src/components/atomics/input_number";
import {
  ContentImageName,
  ContentValueRemove,
  NamePrice,
  Price,
  Product,
} from "./styles";
import { TrashIcon } from "@icons/trash";
import { IProductsCar, useProductContext } from "@context/products";

export function ProductCheckout({ id, image, price, quantity, title }: IProductsCar) {
  const { removeItemCar } = useProductContext();

  return (
    <Product>
      <ContentImageName>
        <img src={image} alt="Product Image" />

        <NamePrice>
          <span>{title}</span>
          <Price>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
        </NamePrice>
      </ContentImageName>

      <InputNumber defaultValue={quantity} id={id} />

      <ContentValueRemove>
        <Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <TrashIcon onClick={() => removeItemCar(id)} />
      </ContentValueRemove>
    </Product>
  );
}

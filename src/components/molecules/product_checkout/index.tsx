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
import { TrashMobileIcon } from "@icons/trash_mobile";

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

      <NamePrice className="mobile">
        <span>{title}</span>
        <Price className="mobile">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <TrashMobileIcon className="mobile" onClick={() => removeItemCar(id)} />
      </NamePrice>

      <ContentValueRemove className="mobile">
        <Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <InputNumber className="mobile" defaultValue={quantity} id={id} />

        <Price className="mobile">
          <span>SUBTOTAL</span>
          {(price * quantity).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <TrashIcon className="trash" onClick={() => removeItemCar(id)} />
      </ContentValueRemove>
    </Product>
  );
}

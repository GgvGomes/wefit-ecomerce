import { InputNumber } from "src/components/atomics/input_number";
import {
  ContentImageName,
  ContentValueRemove,
  NamePrice,
  Price,
  Product,
} from "./styles";
import { TrashIcon } from "@icons/trash";

export function ProductCheckout() {
  return (
    <Product>
      <ContentImageName>
        <img
          src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
          alt="Product Image"
        />

        <NamePrice>
          <span>Homem Aranha</span>
          <Price>R$ 29,90</Price>
        </NamePrice>
      </ContentImageName>

      <InputNumber defaultValue={1} id={1} />

      <ContentValueRemove>
        <Price>R$ 29,90</Price>

        <TrashIcon />
      </ContentValueRemove>
    </Product>
  );
}

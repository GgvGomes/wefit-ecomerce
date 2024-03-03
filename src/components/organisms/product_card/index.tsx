import { IProduct } from "@context/products";
import { Card, CardImage } from "./styles";
import { ButtonElement } from "src/components/atomics/button";
import { BuyCarIcon } from "@icons/buy_car";

export function ProductCard({ image, title, price }: IProduct) {
  return (
    <Card>
      <>
        <CardImage src={image} />
        {title}
      </>

      {price.toString().replace(".", ".")}

      <ButtonElement width={'100%'}>
        <>
        <BuyCarIcon /> 0
        ADICIONAR AO CARRINHO
        </>
      </ButtonElement>
    </Card>
  );
}

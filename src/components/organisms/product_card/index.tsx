import { IProduct, useProductContext } from "@context/products";
import {
  Card,
  CardImage,
  ContentButton,
  ImageContainer,
  InfosContainer,
  Price,
} from "./styles";
import { ButtonElement } from "src/components/atomics/button";
import { BuyCarIcon } from "@icons/buy_car";

export function ProductCard({ image, title, price, id }: IProduct) {
  const { myCar, addItemCar } = useProductContext(),
    productInCar = myCar.find((p) => p.id === id);

  return (
    <Card>
      <InfosContainer>
        <ImageContainer>
          <CardImage src={image} />
          {title}
        </ImageContainer>

        <Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </InfosContainer>

      <ButtonElement
        active={productInCar ? true : false}
        width={"100%"}
        height={"40px"}
        onClick={() => addItemCar(id)}>
        <ContentButton>
          <span>
            <BuyCarIcon /> {productInCar?.quantity || 0}
          </span>
          ADICIONAR AO CARRINHO
        </ContentButton>
      </ButtonElement>
    </Card>
  );
}

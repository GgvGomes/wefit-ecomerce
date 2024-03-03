import { IProduct } from "@context/products";
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

export function ProductCard({ image, title, price }: IProduct) {
  return (
    <Card>
      <InfosContainer>
        <ImageContainer>
          <CardImage src={image} />
          {title}
        </ImageContainer>

        <Price>R$ {price.toString().replace(".", ",")}</Price>
      </InfosContainer>

      <ButtonElement width={"100%"} height={"40px"}>
        <ContentButton>
          <span>
            <BuyCarIcon /> 0
          </span>
          ADICIONAR AO CARRINHO
        </ContentButton>
      </ButtonElement>
    </Card>
  );
}

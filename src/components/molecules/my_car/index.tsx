import { BuyCarIcon } from "@icons/buy_car";
import { FlexContent, ItensCar, MyCarGrid, SpanCar } from "./styles";

export function MyCar() {
  return (
    <MyCarGrid>
        <SpanCar>Meu Carrinho</SpanCar>
      <FlexContent flex="column">
        <ItensCar>0 itens</ItensCar>
      </FlexContent>

      <BuyCarIcon />
    </MyCarGrid>
  );
}

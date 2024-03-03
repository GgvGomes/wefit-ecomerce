import { BuyCarIcon } from "@icons/buy_car";
import { FlexContent, ItensCar, MyCarGrid, SpanCar } from "./styles";

export function MyCar() {
  return (
    <MyCarGrid>
      <FlexContent>
        <SpanCar>Meu Carrinho</SpanCar>
        <ItensCar>0 itens</ItensCar>
      </FlexContent>

      <BuyCarIcon />
    </MyCarGrid>
  );
}

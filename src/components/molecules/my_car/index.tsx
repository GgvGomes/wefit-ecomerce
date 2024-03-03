import { ShoppingBagIcon } from "@icons/shopping_bag";
import { FlexContent, ItensCar, MyCarGrid, SpanCar } from "./styles";

export function MyCar() {
  return (
    <MyCarGrid>
      <FlexContent>
        <SpanCar>Meu Carrinho</SpanCar>
        <ItensCar>0 itens</ItensCar>
      </FlexContent>

      <ShoppingBagIcon />
    </MyCarGrid>
  );
}

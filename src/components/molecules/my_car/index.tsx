import { ShoppingBagIcon } from "@icons/shopping_bag";
import { FlexContent, ItensCar, MyCarGrid, SpanCar } from "./styles";

import { useNavigate } from "react-router-dom";
import { useProductContext } from "@context/products";

export function MyCar() {
  const navigate = useNavigate(),
    { myCar } = useProductContext(),
    itensQuantity = myCar.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <MyCarGrid>
      <FlexContent>
        <SpanCar onClick={() => navigate("/checkout")}>Meu Carrinho</SpanCar>
        <ItensCar>{itensQuantity} itens</ItensCar>
      </FlexContent>

      <ShoppingBagIcon onClick={() => navigate("/checkout")} />
    </MyCarGrid>
  );
}

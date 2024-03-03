import { ButtonElement } from "src/components/atomics/button";
import { Container, Divider, Footer, FooterValue, HeaderTable, Value } from "./styles";
import { ProductCheckout } from "@molecules/product_checkout";

export function Checkout() {
  return (
    <Container>
      <HeaderTable>
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </HeaderTable>

      <ProductCheckout />

      <Divider />

      <Footer>
        <ButtonElement width="235.42px" height="40px">
          FINALIZAR PEDIDO
        </ButtonElement>

        <FooterValue>
          <span>TOTAL</span>
          <Value>R$ 29,90</Value>
        </FooterValue>
      </Footer>
    </Container>
  );
}

import { ButtonElement } from "src/components/atomics/button";
import { Container, ContainerProducts, Divider, Footer, FooterValue, HeaderTable, Value } from "./styles";
import { ProductCheckout } from "@molecules/product_checkout";
import { useProductContext } from "@context/products";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { myCar, resetMyCar } = useProductContext(),
    navigate = useNavigate(),
    itensValue = myCar.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/finish");
    resetMyCar();
  };

  return (
    <Container>
      <HeaderTable>
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </HeaderTable>

      <ContainerProducts>
        {myCar.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCheckout {...product} />
            <Divider />
          </React.Fragment>
        ))}
      </ContainerProducts>

      <Footer>
        <Divider className="mobile" />

        <ButtonElement width="235.42px" height="40px" onClick={handleCheckout}>
          FINALIZAR PEDIDO
        </ButtonElement>

        <FooterValue>
          <span>TOTAL</span>
          <Value>
            {itensValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Value>
        </FooterValue>

        <ButtonElement
          className="mobile"
          width="235.42px"
          height="40px"
          onClick={handleCheckout}>
          FINALIZAR PEDIDO
        </ButtonElement>
      </Footer>
    </Container>
  );
}

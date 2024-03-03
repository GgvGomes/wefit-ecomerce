import { ButtonElement } from "src/components/atomics/button";
import { Container, Span } from "./styles";

export function NotFound() {
  return (
    <Container>
      <Span>Parece que não há nada por aqui {":("}</Span>

      <img
        src="/not_found.png"
        alt="Não há nada por aqui, tente recarregar a página ou clique no botão abaixo"
      />

      <ButtonElement height="40px" width="180px">
        VOLTAR
      </ButtonElement>
    </Container>
  );
}

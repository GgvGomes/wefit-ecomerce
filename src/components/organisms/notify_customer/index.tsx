import { ButtonElement } from "src/components/atomics/button";
import { Container, Span } from "./styles";
import { useNavigate } from "react-router-dom";

interface INotifyCustomerProps {
  text: string;
  src: string;
  to: string;
}

export function NotifyCustomer({ src, text, to }: INotifyCustomerProps) {
  const navigate = useNavigate();

  const onClick = () => navigate(to);

  return (
    <Container>
      <Span>{text}</Span>

      <img
        src={src}
        alt="Não há nada por aqui, tente recarregar a página ou clique no botão abaixo"
      />

      <ButtonElement height="40px" width="180px" onClick={onClick}>
        VOLTAR
      </ButtonElement>
    </Container>
  );
}

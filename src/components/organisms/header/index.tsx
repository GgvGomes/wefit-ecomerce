import { MyCar } from "@molecules/my_car";
import { HeaderGrid, Title } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderGrid>
      <Title onClick={() => navigate("/")}>WeMovies</Title>

      <MyCar />
    </HeaderGrid>
  );
}

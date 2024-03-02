import { MyCar } from "@molecules/my_car";
import { HeaderGrid, Title } from "./styles";

export function Header() {
  return (
    <HeaderGrid>
      <Title>WeMovies</Title>

      <MyCar />
    </HeaderGrid>
  );
}

import { LoaderIcon } from "@icons/load-spinner";
import { LoaderContainer, LoaderSpin } from "./styles";

export function Loader() {
  return (
    <LoaderContainer>
      {/* <LoaderIcon /> */}
      <LoaderSpin />
    </LoaderContainer>
  );
}

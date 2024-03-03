import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;

  padding: 0 calc((100vw - 960px) / 2);

  background-color: #2f2e41;

  overflow: auto;

  @media only screen and (max-width: ${breakPoints.lg}px) {
    padding: 0 1vw;
  }
  
  @media only screen and (max-width: ${breakPoints.sm}px) {
    padding: 0 4vw;
  }
`;


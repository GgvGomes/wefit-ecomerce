import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap}; 
  
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  
  width: 100%;

  @media only screen and (max-width: ${breakPoints.lg}px) {
    justify-content: center;
  }
`;

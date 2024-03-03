import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap}; 
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  
  width: 100%;
`;

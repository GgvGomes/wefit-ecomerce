import styled from "styled-components";

export const HeaderGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${({ theme }) => theme.width};
  height: 70px; // == 8.75%

  border: 1px solid red;

  padding: ${({ theme }) => theme.padding};
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;
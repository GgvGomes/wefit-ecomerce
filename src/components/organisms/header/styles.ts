import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const HeaderGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px; // == 8.75%

  margin-bottom: 28px;

  padding: ${({ theme }) => theme.padding};

  @media only screen and (max-width: ${breakPoints.sm}px) {
    padding: 16px 0;
    margin-bottom: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

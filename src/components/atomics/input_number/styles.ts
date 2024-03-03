import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  width: 20%;

  svg {
    cursor: pointer;
  }

  &.mobile {
    display: none;
  }

  @media only screen and (max-width: ${breakPoints.sm}px) {
    &:not(.mobile) {
      display: none;
    }

    &.mobile {
      display: flex;
      width: 117px;
      height: 26px;

      svg {
        display: initial;
      }

      height: 26px;
    }
  }
`;

export const InputNumberStyled = styled.input`
  width: 62px;
  height: 26px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;

  color: black;

  cursor: default;
  background-color: transparent;

  @media only screen and (max-width: ${breakPoints.sm}px) {
    width: 50%;
  }
`;

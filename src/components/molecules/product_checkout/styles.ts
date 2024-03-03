import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media only screen and (max-width: ${breakPoints.sm}px) {
    position: relative;
  }
`;

export const ContentImageName = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  gap: 52px;

  img {
    width: 89px;
    height: 114px;
  }

  @media only screen and (max-width: ${breakPoints.sm}px) {
    img {
      width: 64px;
      height: 82px;
    }

    width: 64px;
    margin-right: 16px;
    gap: 0;
  }
`;

export const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: #000;

    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
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
      flex-direction: row;
      justify-content: space-between;

      width: calc(100% - (16px + 64px));
      align-self: flex-start;

      svg {
        cursor: pointer;
      }
    }
  }
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  color: #000;

  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  &.mobile {
    display: none;
  }

  @media only screen and (max-width: ${breakPoints.sm}px) {
    &:not(.mobile) {
      display: none;
    }

    &.mobile {
      display: grid;
      text-align: right;

      span {
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;

        color: #999999;
      }
    }
  }
`;

export const ContentValueRemove = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  @media only screen and (max-width: ${breakPoints.sm}px) {
    &:not(.mobile) {
      display: none;
    }

    &.mobile {
      display: flex;
      flex-direction: row;
      align-items: center;

      align-self: flex-end;
      position: absolute;

      bottom: 6px;
      right: 0;

      width: calc(100% - (16px + 64px));

      .trash {
        display: none;
      }
    }
  }

  svg {
    cursor: pointer;
  }
`;

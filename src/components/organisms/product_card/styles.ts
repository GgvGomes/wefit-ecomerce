import { breakPoints } from "@context/styles/breake_points";
import styled from "styled-components";

export const Card = styled.div`
  width: calc((960px - 32px) / 3);
  height: 305px;

  background-color: #ffffff;

  border-radius: 4px;
  padding: 10px 11px 10px 11px;

  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  @media only screen and (max-width: ${breakPoints.lg}px) {
    width: calc((100% - 32px) / 2);
  }

  @media only screen and (max-width: ${breakPoints.sm}px) {
    width: 100%;
  }
`;

export const InfosContainer = styled.div`
  gap: 2px;
  display: grid;
  align-items: start;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  text-align: center;
  gap: 7px;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
`;

export const CardImage = styled.img`
  width: 147px;
  height: 188px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;

  text-align: center;
  color: black;
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  font-size: 12px;
  font-weight: 700;

  gap: 12px;
  padding: 8px;

  svg {
    margin-bottom: -4px;
  }
`;

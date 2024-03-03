import styled from "styled-components";

export const MyCarGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      scale: 1.1;
    }
  }
`;

export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

export const SpanCar = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: right;
  width: fit-content;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;

export const ItensCar = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #999999;
`;

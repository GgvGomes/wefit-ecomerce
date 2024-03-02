import styled from "styled-components";

export const MyCarGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FlexContent = styled.div<{
  flex: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({ flex }) => (flex === "column" ? "column" : "row")};
  text-align: end;
`;

export const SpanCar = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: right;
  width: fit-content;
`;

export const ItensCar = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #999999;
`;

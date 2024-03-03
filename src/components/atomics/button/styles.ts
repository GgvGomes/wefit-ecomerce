import styled from "styled-components";

export const Button = styled.button<{ $width: string; $height?: number }>`
  width: ${({ $width }) => $width};
  height: ${(props) => `${props?.$height}px` || "auto"};

  padding: 8px;
  border-radius: 4px;

  background-color: #009EDD;
  border: none;
  color: #fff;

  font-size: 12px;
  font-weight: 700;
`;

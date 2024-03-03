import styled from "styled-components";

export const Button = styled.button<{
  $width: string;
  $height?: string;
  $padding?: string;
}>`
  width: ${({ $width }) => $width};
  height: ${(props) => `${props?.$height}` || "auto"};

  /* padding: 8px; */
  /* padding: ${({ $padding }) => $padding || "8px"}; */
  ${({ $padding }) => $padding && `padding: ${$padding};`}
  border-radius: 4px;

  background-color: #009edd;
  border: none;
  color: #fff;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;
`;

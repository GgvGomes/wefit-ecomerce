import styled from "styled-components";

export const Button = styled.button<{
  $width: string;
  $height?: string;
  $padding?: string;
  $active?: boolean;
}>`
  width: ${({ $width }) => $width};
  height: ${(props) => `${props?.$height}` || "auto"};

  ${({ $padding }) => $padding && `padding: ${$padding};`}
  border-radius: 4px;

  /* background-color: #009edd; */
  background-color: ${({ $active }) => ($active ? "#039B00" : "#009edd")};
  border: none;
  color: #fff;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  * {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ $active }) => ($active ? "#028000" : "#048dc4")};
    color: #f5f5f5;

    :nth-child(1n) {
      scale: 1.03;
    }
  }
`;

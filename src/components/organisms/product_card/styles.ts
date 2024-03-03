import styled from "styled-components";

export const Card = styled.div`
  width: calc((960px - 32px) / 3);
  height: 305px;

  background-color: #ffffff;
  color: black;

  border-radius: 4px;
  padding: 10px, 11px, 10px, 11px;

  display: grid;
  gap: ${({ theme }) => theme.gap};
  align-items: start;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 147px;
  height: 188px;
`;

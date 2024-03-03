import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
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
`;

export const ContentValueRemove = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  svg {
    cursor: pointer;
  }
`;

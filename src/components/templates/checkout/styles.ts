import styled from "styled-components";

export const Container = styled.div`
  /* width: 950px; */
  width: calc(100% - 10px);
  margin: 0 auto;
  /* height: Hug (286px) */
  height: auto;

  padding: 24px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  gap: 21px;

  background-color: #fff;
`;

export const HeaderTable = styled.div`
  /* width: 691px; */
  width: 100%;
  height: 20px;

  display: flex;

  align-items: center;
  justify-items: flex-start;

  span {
    color: #999999;

    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  :nth-child(1n):not(:last-child, :first-child) {
    width: 20%;
  }
  :last-child,
  :first-child {
    width: 40%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: #999999;
`;

export const Footer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const FooterValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 5px;

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;

    color: #999999;
    text-align: center;
    width: 61.47px;
  }
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;

  color: #000;
  text-align: center;

  width: 130.79px;
`;

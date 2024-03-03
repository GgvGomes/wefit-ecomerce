import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 532.8px */
  height: 66, 6vh;

  padding: 64px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 32px;

  background: #fff;

  button {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

export const Span = styled.span`
  color: #000;

  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`;

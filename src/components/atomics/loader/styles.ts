import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: transparent;
`;

export const LoaderSpin = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 50%;
    margin: -0.5em 0 0 -0.5em;

    width: 62.25px;
    height: 62.25px;

    font-size: 1.5em;
    border-right: 0.1em solid #bbc0ca;
    /* border-bottom: 0.1em solid #80808000; */
    border-left: 0.1em solid #80808000;
    border-top: 0.1em solid #bbc0ca;
    
    border-radius: 3em;
    box-sizing: border-box;
    animation: spin 1s infinite linear;
    transition: 1s ease;
  }
`;

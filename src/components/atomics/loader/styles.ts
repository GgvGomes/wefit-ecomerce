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
  --border: 0.3rem;

  position: relative;

  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;

  background: #2f2e41;
  background-clip: padding-box;
  border: solid var(--border) transparent;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;

    margin: -0.3rem;
    border-radius: inherit;
    background: conic-gradient(
      from 90deg at 50% 50%,
      rgba(128, 128, 128, 0.0001) -46.17deg,
      #ffffff 313.55deg,
      rgba(128, 128, 128, 0.0001) 313.83deg,
      #ffffff 673.55deg
    );

    -webkit-animation: spin 1.5s infinite;
    animation: spin 1.5s infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

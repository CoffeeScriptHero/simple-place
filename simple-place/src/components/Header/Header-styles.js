import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  height: 50px;
`;

const moveAnimation = keyframes`
 0% { left: 0; opacity: 0.2;}
 100% { left: 80%; opacity: 1; }
`;

const moveAnimation2 = keyframes`
 0% { bottom: 0; opacity: 0.2;}
 100% { bottom: 90%; opacity: 1; }
`;

export const LogoFirst = styled.span`
  position: absolute;
  top: 25px;
  animation-name: ${moveAnimation};
  animation-easing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const LogoSecond = styled.span`
  position: absolute;
  right: 240px;
  animation-name: ${moveAnimation2};
  animation-easing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

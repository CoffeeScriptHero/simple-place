import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  height: 100px;
  position: relative;
`;

const moveAnimation = keyframes`
 0% { left: 0; opacity: 0.2;}
 100% { left: 80px; opacity: 1; }
`;

export const Logo = styled.span`
  position: absolute;
  animation-name: ${moveAnimation};
  animation-easing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

import styled from "styled-components";
import { keyframes } from "styled-components";

// const moveAnimation = keyframes`
//  0% { left: 0; opacity: 0.2;}
//  100% { left: 80%; opacity: 1; }
// `;

// const moveAnimation2 = keyframes`
//  0% { bottom: 0; opacity: 0.2;}
//  100% { bottom: 90%; opacity: 1; }
// `;

// export const LogoFirst = styled.span`
//   position: absolute;
//   top: 25px;
//   animation-name: ${moveAnimation};
//   animation-easing-function: linear;
//   animation-duration: 1s;
//   animation-fill-mode: forwards;
// `;

// export const LogoSecond = styled.span`
//   position: absolute;
//   right: 240px;
//   animation-name: ${moveAnimation2};
//   animation-easing-function: linear;
//   animation-duration: 1s;
//   animation-fill-mode: forwards;
// `;

export const HeaderWrapper = styled.div`
  height: 64px;
`;

export const HeaderContent = styled(HeaderWrapper)`
  width: 975px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const LogoPart = styled.span`
  margin: 0;
  font-size: 20px;
  font-family: Quicksand;
  font-weight: semi-bold;
`;

export const NavBar = styled.nav``;

export const IconsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

export const IconItem = styled.li``;

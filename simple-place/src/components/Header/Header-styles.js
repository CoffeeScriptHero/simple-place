import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e7e7e7;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Logo = styled.span`
  margin: 0;
  font-size: 20px;
  font-family: Quicksand;
  font-weight: bold;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 150px;
`;

export const IconLink = styled(Link)`
  width: 24px;
  height: 24px;
  z-index: 100;
`;

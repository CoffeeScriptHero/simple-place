import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 375px;
  height: 350px;
  right: -20%;
  top: 46px;
  background: white;
  box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
  &::before {
    content: "";
    height: 0px;
    width: 0px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -10px;
    border-right: solid 10px transparent;
    border-left: solid 10px transparent;
    filter: drop-shadow(0 -0.9px 1px rgba(var(--jb7, 0, 0, 0), 0.0975));
    border-bottom: solid 10px white;
  }
`;

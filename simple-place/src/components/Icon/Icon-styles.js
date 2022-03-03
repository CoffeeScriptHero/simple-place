import styled from "styled-components";

export const Svg = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: ${(props) => props.margin || "0"};
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Svg = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: ${(props) => props.margin || "0"};
`;

export const IconLink = styled(Link)`
  width: 24px;
  height: 24px;
`;

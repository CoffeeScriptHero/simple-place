import styled from "styled-components";
import { Link } from "react-router-dom";

export const Name = styled(Link)`
  margin-left: 15px;
  font-family: ${(props) => props.font || "Quicksand"};
  font-weight: 500;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: ${(props) => props.decoration || "none"};
  }
  font-weight: ${(props) => props.weight || "400"};
  margin: ${(props) => props.margin || "0"};
  flex: ${(props) => props.flex || "auto"};
`;

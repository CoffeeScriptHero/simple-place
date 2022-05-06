import styled from "styled-components";
import { Link } from "react-router-dom";

export const Name = styled(Link)`
  // font-family: ${(props) => props.font || "Segoe UI"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin: ${(props) => props.margin || "0"};
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: ${(props) => props.decoration || "none"};
  }
`;

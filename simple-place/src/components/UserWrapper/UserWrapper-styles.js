import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${(props) => (props.isComment ? "inline-flex " : "flex")};
  flex: ${(props) => props.flex};
  align-items: center;
`;

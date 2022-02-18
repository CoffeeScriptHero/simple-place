import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  display: inline-block;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src || "#",
  alt: props.src || "undefined",
}))`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

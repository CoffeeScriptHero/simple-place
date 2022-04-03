import styled from "styled-components";

export const PostPreview = styled.img.attrs((props) => ({
  src: props.img || "#",
}))`
  position: relative;
  width: 293px;
  height: 293px;
  object-fit: cover;
  cursor: pointer;
  transition: 0.2s;
  &:not(:nth-of-type(3n)) {
    margin-right: 28px;
  }
  &:hover {
    filter: blur(1px);
  }
`;

export const PostInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Wrapper = styled.div``;

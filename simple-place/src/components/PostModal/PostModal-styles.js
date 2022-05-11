import styled from "styled-components";

const PD_LEFT = "16px";

export const Wrapper = styled.div``;

export const PostModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  position: relative;
  @media (min-width: 1400px) {
    width: 851px;
    height: 851px;
  }
  @media (max-width: 1400px) {
    width: 851px;
    height: 710px;
  }
  background: #000;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
}))`
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PostContent = styled.div`
  @media (min-width: 1400px) {
    width: 500px;
    height: 851px;
  }
  @media (max-width: 1400px) {
    width: 500px;
    height: 710px;
  }
  height: 710px;
  background: #fff;
`;

export const PostHeader = styled.header`
  padding: 15px 35px 15px ${PD_LEFT};
  display: flex;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const PostBody = styled.div`
  padding: 16px 35px 16px ${PD_LEFT};
  height: 600px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

export const PostFooter = styled.div``;

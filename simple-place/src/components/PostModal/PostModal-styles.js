import styled from "styled-components";

const PD_LEFT = "16px";

export const Wrapper = styled.div``;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 851px;
  height: 851px;
  background: #000;
`;

export const PostContent = styled.div`
  width: 500px;
  height: 851px;
  background: #fff;
`;

export const Header = styled.header`
  padding: 15px 35px 15px ${PD_LEFT};
  display: flex;
`;

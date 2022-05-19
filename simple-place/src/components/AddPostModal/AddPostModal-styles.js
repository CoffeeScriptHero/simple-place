import styled from "styled-components";

export const Wrapper = styled.div``;

export const AddPostModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const ModalContent = styled.div`
  width: 545px;
  height: 580px;
  background: white;
  border-radius: 3%;
  overflow: hidden;
`;

export const ModalHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  margin: 0 auto;
  font-size: 17.5px;
`;

export const NextButton = styled.button`
  font-weight: 700;
  color: #5551ff;
  border: none;
  font-size: 16px;
  background: none;
  cursor: pointer;
`;

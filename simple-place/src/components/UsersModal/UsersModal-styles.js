import styled from "styled-components";

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
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 3%;
  overflow-x: hidden;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

export const UsersWrapper = styled.div`
  height: 358px;
  overflow-y: auto;
  border-radius: 3%;
`;

export const ModalText = styled.span`
  font-weight: 600;
  margin: 0 auto;
`;

export const CrossWrapper = styled.div``;

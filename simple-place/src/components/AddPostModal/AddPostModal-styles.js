import styled from "styled-components";
import { Modal } from "../../App-styles";

export const Wrapper = styled.div`
  display: ${(props) => props.display || "block"};
`;

export const AddPostModalWrapper = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4;
`;

export const ModalContent = styled.div`
  // width: 545px;
  // height: 580px;
  background: white;
  border-radius: 3%;
  overflow: hidden;
  // @media (min-width: 1200px) {
  //   min-width: 680px;
  //   min-height: 720px;
  // }
  width: ${(props) => (props.sizes.width ? props.sizes.width : "545px")};
  height: ${(props) => (props.sizes.width ? props.sizes.width : "580px")};
`;

export const ModalHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  margin: 0;
  width: 100%;
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

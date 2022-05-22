import styled from "styled-components";
import { Modal } from "../../App-styles";

export const Wrapper = styled.div``;

export const ConfirmationModalWrapper = styled(Modal)``;

export const ModalContent = styled.div`
  width: 400px;
  height: 201px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  margin: 32px 32px 16px 32px;
`;

export const ConfirmationTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: black;
  margin: 0;
  text-align: center;
`;

export const ConfirmationWarning = styled.span`
  padding-top: 16px;
  font-size: 14px;
  line-height: 18px;
  color: rgba(var(--f52, 142, 142, 142), 1);
  display: block;
  text-align: center;
`;

export const ConfirmationButton = styled.button`
  font-weight: ${(props) => (props.discard ? "700" : "400")};
  color: ${(props) =>
    props.discard ? "rgba(var(--i30,237,73,86),1)" : "black"};
  border: none;
  cursor: pointer;
  border-top: ${(props) =>
    props.discard ? "1px solid rgba(var(--b6a, 219, 219, 219), 1)" : "none"};
  border-bottom: ${(props) =>
    props.discard ? "1px solid rgba(var(--b6a, 219, 219, 219), 1)" : "none"};
  padding: 4px 8px;
  font-size: 14px;
  text-align: center;
  min-height: 48px;
  background: white;
`;

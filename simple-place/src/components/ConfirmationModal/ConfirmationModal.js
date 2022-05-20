import {
  Wrapper,
  ConfirmationModalWrapper,
  ModalContent,
  TextWrapper,
  ConfirmationTitle,
  ConfirmationWarning,
  ConfirmationButton,
} from "./ConfirmationModal-styles";

const ConfirmationModal = ({
  title,
  warning,
  btnText,
  setShowConfirmModal,
  setShowModal,
}) => {
  return (
    <Wrapper>
      <ConfirmationModalWrapper>
        <ModalContent>
          <TextWrapper>
            <ConfirmationTitle>{title}</ConfirmationTitle>
            <ConfirmationWarning>{warning}</ConfirmationWarning>
          </TextWrapper>
          <ConfirmationButton discard>{btnText}</ConfirmationButton>
          <ConfirmationButton>Cancel</ConfirmationButton>
        </ModalContent>
      </ConfirmationModalWrapper>
    </Wrapper>
  );
};

export default ConfirmationModal;

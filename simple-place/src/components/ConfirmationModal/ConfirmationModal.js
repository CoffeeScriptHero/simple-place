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
  cancelButton,
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
          <ConfirmationButton discard onClick={() => setShowModal(false)}>
            {btnText}
          </ConfirmationButton>
          <ConfirmationButton
            ref={cancelButton}
            onClick={() => {
              setShowConfirmModal(false);
            }}
          >
            Cancel
          </ConfirmationButton>
        </ModalContent>
      </ConfirmationModalWrapper>
    </Wrapper>
  );
};

export default ConfirmationModal;

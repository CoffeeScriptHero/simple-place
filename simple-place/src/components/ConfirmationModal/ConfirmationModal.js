import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  ConfirmationModalWrapper,
  ModalContent,
  TextWrapper,
  ConfirmationTitle,
  ConfirmationWarning,
  ConfirmationButton,
} from "./ConfirmationModal-styles";
import {
  confirmationModalSelectors,
  confirmationModalOperations,
} from "../../store/confirmationModal/index.js";
import { Outlet } from "react-router-dom";

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const modal = useRef(null);
  const modalInfo = useSelector(confirmationModalSelectors.getModalInfo());

  const cancelHandler = () => {
    dispatch(confirmationModalOperations.setShowModal(false));
  };

  const closeModalOnArea = (e) => {
    if (!modal.current.contains(e.target)) {
      dispatch(confirmationModalOperations.setShowModal(false));
    }
  };

  if (!modalInfo.showModal) return null;

  return (
    <Wrapper onClick={closeModalOnArea}>
      <ConfirmationModalWrapper>
        <ModalContent ref={modal}>
          <TextWrapper>
            <ConfirmationTitle>{modalInfo.title}</ConfirmationTitle>
            {modalInfo.warning && (
              <ConfirmationWarning>{modalInfo.warning}</ConfirmationWarning>
            )}
          </TextWrapper>
          {modalInfo.extraBtnText && (
            <ConfirmationButton
              borderColor="1px solid rgba(var(--b6a, 219, 219, 219), 1)"
              onClick={modalInfo.extraBtnHandler}
            >
              {modalInfo.extraBtnText}
            </ConfirmationButton>
          )}
          <ConfirmationButton
            borderColor="1px solid rgba(var(--b6a, 219, 219, 219), 1)"
            color="rgba(var(--i30,237,73,86),1)"
            onClick={modalInfo.actionBtnHandler}
          >
            {modalInfo.actionBtnText}
          </ConfirmationButton>
          <ConfirmationButton onClick={cancelHandler}>
            Cancel
          </ConfirmationButton>
        </ModalContent>
      </ConfirmationModalWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default ConfirmationModal;

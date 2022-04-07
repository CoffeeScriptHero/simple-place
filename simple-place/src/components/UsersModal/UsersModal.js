import React from "react";
import {
  Wrapper,
  Modal,
  ModalContent,
  ModalHeader,
  ModalText,
} from "./UsersModal-styles";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  usersModalOperations,
  usersModalSelectors,
} from "../../store/usersModal/";
import { useRef } from "react";

const UsersModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(usersModalSelectors.getShowModal());
  const modalWindow = useRef(null);

  const closeModal = () => {
    dispatch(usersModalOperations.setNewShowModal(false));
  };

  const closeModalOnArea = (e) => {
    if (e.target !== modalWindow.current) {
      closeModal();
    }
  };

  return (
    <Wrapper>
      {showModal && (
        <Modal onClick={closeModalOnArea}>
          <ModalContent ref={modalWindow}>
            <ModalHeader>
              <ModalText>Subscribers</ModalText>
              <Icon
                pointer
                type="cross"
                width={"16px"}
                height={"16px"}
                onClick={closeModal}
              />
            </ModalHeader>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default UsersModal;

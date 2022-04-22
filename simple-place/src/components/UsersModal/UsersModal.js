import React, { useEffect } from "react";
import {
  Wrapper,
  Modal,
  ModalContent,
  ModalHeader,
  ModalText,
  CrossWrapper,
} from "./UsersModal-styles";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  usersModalOperations,
  usersModalSelectors,
} from "../../store/usersModal/";
import { useRef } from "react";
import UserModal from "../UserModal/UserModal";
import { useNavigate, useParams } from "react-router-dom";

const UsersModal = () => {
  const type = useSelector(usersModalSelectors.getModalType());
  const showModal = useSelector(usersModalSelectors.getShowModal());
  const users = useSelector(usersModalSelectors.getUsers());
  const dispatch = useDispatch();
  const userpage = useParams().username;
  const navigate = useNavigate();
  const modalWindow = useRef(null);
  const cross = useRef(null);

  const closeModal = () => {
    dispatch(usersModalOperations.setNewShowModal(false));
  };

  const closeModalOnArea = (e) => {
    if (
      !modalWindow.current.contains(e.target) ||
      cross.current.contains(e.target)
    ) {
      closeModal();
      navigate(`/${userpage}`);
    }
  };

  const usersList = users.map((u) => (
    <UserModal key={u.username} username={u.username} img={u.profileImg} />
  ));

  useEffect(() => {
    if (!showModal) {
      navigate(`/${userpage}`);
    }
  }, []);

  return (
    <Wrapper>
      {showModal && (
        <Modal onClick={closeModalOnArea}>
          <ModalContent ref={modalWindow}>
            <ModalHeader>
              <ModalText>{type}</ModalText>
              <CrossWrapper ref={cross}>
                <Icon
                  pointer
                  type="cross"
                  width={"16px"}
                  height={"16px"}
                  onClick={closeModal}
                />
              </CrossWrapper>
            </ModalHeader>
            {showModal && usersList}
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default UsersModal;

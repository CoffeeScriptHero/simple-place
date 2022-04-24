import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Modal,
  ModalContent,
  ModalHeader,
  ModalText,
  UsersWrapper,
  CrossWrapper,
} from "./UsersModal-styles";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  usersModalOperations,
  usersModalSelectors,
} from "../../store/usersModal/";
import { userSelectors } from "../../store/user";
import { useRef } from "react";
import UserModal from "../UserModal/UserModal";
import { useNavigate, useParams } from "react-router-dom";

const UsersModal = () => {
  // -------------Modal
  const type = useSelector(usersModalSelectors.getModalType());
  const showModal = useSelector(usersModalSelectors.getShowModal());
  const modalWindow = useRef(null);
  const cross = useRef(null);
  const users = useSelector(usersModalSelectors.getUsers());
  // ------------------
  // -------------Userpage
  const userpage = useParams().username;
  const mainUser = useSelector(userSelectors.getUser());
  const [isMainUser, setIsMainUser] = useState(false);
  // ---------------------
  // ------------------etc
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //

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

  useEffect(() => {
    if (mainUser.user === userpage) {
      setIsMainUser(true);
    }
    if (!showModal) {
      navigate(`/${userpage}`);
    }
  }, []);

  const usersList = users.map((u) => (
    <UserModal
      key={u.id}
      isMainUser={isMainUser}
      type={type}
      username={u.username}
      id={u.id}
      mainId={mainUser.id}
      img={u.profileImg}
    />
  ));

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
            <UsersWrapper>{showModal && usersList}</UsersWrapper>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default UsersModal;

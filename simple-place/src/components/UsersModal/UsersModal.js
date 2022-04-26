import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Modal,
  ModalContent,
  ModalHeader,
  ModalText,
  UsersWrapper,
  CrossWrapper,
  NoPeopleText,
} from "./UsersModal-styles";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
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
  const users = useSelector(usersModalSelectors.getUsers());
  const type = useSelector(usersModalSelectors.getModalType());
  const showModal = useSelector(usersModalSelectors.getShowModal());
  const modalWindowRef = useRef(true);
  const crossRef = useRef(null);
  let usersList;
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
      !modalWindowRef.current.contains(e.target) ||
      crossRef.current.contains(e.target)
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

  if (users !== null) {
    usersList = users.map((u) => (
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
  }

  return (
    <Wrapper>
      {showModal && (
        <Modal onClick={closeModalOnArea}>
          <ModalContent ref={modalWindowRef}>
            <ModalHeader>
              <ModalText>{type}</ModalText>
              <CrossWrapper ref={crossRef}>
                <Icon
                  pointer
                  type="cross"
                  width={"16px"}
                  height={"16px"}
                  onClick={closeModal}
                />
              </CrossWrapper>
            </ModalHeader>
            {users === null && <Loader />}
            {users !== null && users.length === 0 && (
              <UsersWrapper noUsers>
                <Icon type={"people"} width={"90px"} height={"90px"} />
                <NoPeopleText>There is no one here, yet</NoPeopleText>
              </UsersWrapper>
            )}
            {users !== null && users.length > 0 && (
              <UsersWrapper>{showModal && usersList}</UsersWrapper>
            )}
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default UsersModal;

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalText,
} from "./UsersModal-styles";
import Icon from "../Icon/Icon";

const UsersModal = () => {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalText>Subscribers</ModalText>
          <Icon pointer type="cross" width={"16px"} height={"16px"} />
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};

export default UsersModal;

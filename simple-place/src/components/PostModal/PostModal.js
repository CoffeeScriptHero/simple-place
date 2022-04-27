import React from "react";
import { Wrapper, Modal, ModalContent } from "./PostModal-styles";
import { useSelector, useDispatch } from "react-redux";
import { postModalOperations } from "../../store/postModal";
import { postModalSelectors } from "../../store/postModal";

const PostModal = () => {
  const showModal = useSelector(postModalSelectors.getShowModal());

  return (
    <Wrapper>
      {showModal && (
        <Modal>
          <ModalContent></ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default PostModal;

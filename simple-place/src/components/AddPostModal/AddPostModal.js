import React, { useRef, useState } from "react";
import AddPostDescription from "../AddPostDescription/AddPostDescription";
import Icon from "../Icon/Icon";
import UploadImageWrapper from "../UploadImageWrapper/UploadImageWrapper";
import {
  Wrapper,
  AddPostModalWrapper,
  ModalContent,
  ModalHeader,
  NextButton,
  HeaderTitle,
} from "./AddPostModal-styles";

const AddPostModal = ({ setShowModal }) => {
  const [images, setImages] = useState([]);
  const [stage, setStage] = useState(1);
  // 1 stage - user suggested to select photo
  // 2 stage - photo selected, Next button - - > to stage 3, arrow - - > to stage 3
  // 3 stage - description, Next button - - > publish, arrow - - > to stage 2
  const modalRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOnArea = (e) => {
    if (!modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const incrementStage = () => {
    stage === 3 ? setShowModal(false) : setStage((prevState) => prevState + 1);
  };

  const decrementStage = () => {
    if (stage === 2) setImages([]);
    setStage((prevState) => prevState - 1);
  };

  return (
    <Wrapper onClick={closeModalOnArea}>
      <AddPostModalWrapper>
        <ModalContent ref={modalRef}>
          <ModalHeader>
            {stage > 1 && (
              <Icon
                width="21px"
                height="21px"
                type="leftarrow"
                pointer
                onClick={decrementStage}
              />
            )}
            <HeaderTitle>Create new post</HeaderTitle>
            {images.length > 0 && (
              <NextButton onClick={incrementStage}>Next</NextButton>
            )}
          </ModalHeader>
          {(stage == 1 || stage == 2) && (
            <UploadImageWrapper
              images={images}
              setImages={setImages}
              setStage={setStage}
            />
          )}
          {stage == 3 && <AddPostDescription />}
        </ModalContent>
      </AddPostModalWrapper>
      <Icon
        position="fixed"
        zIndex="10"
        top="30px"
        right="30px"
        type="cross"
        pointer
        onClick={closeModal}
      />
    </Wrapper>
  );
};

export default AddPostModal;

import React, { useRef, useState } from "react";
import AddPostDescription from "../AddPostDescription/AddPostDescription";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import Icon from "../Icon/Icon";
import UploadImage from "../UploadImage/UploadImage";
import {
  Wrapper,
  AddPostModalWrapper,
  ModalContent,
  ModalHeader,
  NextButton,
  HeaderTitle,
} from "./AddPostModal-styles";

const AddPostModal = ({ setShowModal }) => {
  const isDesktopRes = window.screen.width >= 1200;
  const [images, setImages] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [sizes, setSizes] = useState({
    width: isDesktopRes ? "680px" : "545px",
    height: isDesktopRes ? "720px" : "580px",
  });
  const [stage, setStage] = useState(1);
  // 1 stage - user suggested to select photo
  // 2 stage - photo selected, left arrow - - > to stage 3, Next button - - > to stage 3
  // 3 stage - description, , left arrow - - > to stage 2, Next button - - > publish
  const modalRef = useRef(null);
  const cancelButton = useRef(null);

  const setSizeWidth = (stage) => {
    if (stage === 2) {
      setSizes((prevState) => {
        return { ...prevState, width: isDesktopRes ? "1020px" : "885px" };
      });
    } else {
      setSizes((prevState) => {
        return { ...prevState, width: isDesktopRes ? "680px" : "580px" };
      });
    }
  };

  const closeModalOnArea = (e) => {
    if (
      !modalRef.current.contains(e.target) &&
      e.target.textContent !== "Cancel"
    ) {
      if (stage === 1) setShowModal(false);
      else setShowConfirmModal(true);
    }
  };

  const incrementStage = () => {
    if (stage === 2) setSizeWidth(2);
    stage === 3 ? setShowModal(false) : setStage((prevState) => prevState + 1);
  };

  const decrementStage = () => {
    if (stage === 3) setSizeWidth(3);
    if (stage === 2) setImages([]);
    setStage((prevState) => prevState - 1);
  };

  return (
    <Wrapper onClick={closeModalOnArea}>
      <AddPostModalWrapper>
        <ModalContent ref={modalRef} sizes={sizes}>
          <ModalHeader>
            {stage > 1 && (
              <Icon
                padding="0 25px 0 0"
                width="21px"
                height="21px"
                type="leftarrow"
                pointer
                onClick={decrementStage}
              />
            )}
            <HeaderTitle>Create new post</HeaderTitle>
            {images.length > 0 && (
              <NextButton onClick={incrementStage}>
                {stage !== 3 && "Next"}
                {stage === 3 && "Publish"}
              </NextButton>
            )}
          </ModalHeader>
          {stage !== 3 && (
            <UploadImage
              images={images}
              setImages={setImages}
              setStage={setStage}
            />
          )}
          {stage == 3 && (
            <Wrapper display="flex">
              <UploadImage
                images={images}
                setImages={setImages}
                setStage={setStage}
                width={parseInt(sizes.width) - 340}
                // whole modal width on 3 stage - description wrapper width
              />
              <AddPostDescription incrementStage={incrementStage} />
            </Wrapper>
          )}
        </ModalContent>
      </AddPostModalWrapper>
      <Icon
        position="fixed"
        zIndex="10"
        top="30px"
        right="30px"
        type="cross"
        pointer
        onClick={() => setShowConfirmModal(true)}
      />
      {showConfirmModal && (
        <ConfirmationModal
          title="Discard post?"
          warning="If you leave, your edits won't be saved."
          btnText="Discard"
          cancelButton={cancelButton}
          setShowConfirmModal={setShowConfirmModal}
          setShowModal={setShowModal}
        />
      )}
    </Wrapper>
  );
};

export default AddPostModal;

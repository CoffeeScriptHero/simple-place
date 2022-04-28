import React from "react";
import {
  Wrapper,
  Modal,
  ModalContent,
  ImageWrapper,
  PostContent,
  Header,
} from "./PostModal-styles";
import { useSelector, useDispatch } from "react-redux";
import { postModalOperations } from "../../store/postModal";
import { postModalSelectors } from "../../store/postModal";
import UserWrapper from "../UserWrapper/UserWrapper";

const PostModal = () => {
  const showModal = useSelector(postModalSelectors.getShowModal());

  return (
    <Wrapper>
      {showModal && (
        <Modal>
          <ModalContent>
            <ImageWrapper></ImageWrapper>
            <PostContent>
              <Header>
                <UserWrapper
                  profileImg={
                    "https://www.meme-arsenal.com/memes/b282bb90aa06c62a7450acaf4a182ad1.jpg"
                  }
                  username={"Sofia2005"}
                />
              </Header>
            </PostContent>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default PostModal;

import { useRef, useEffect, useState } from "react";
import {
  Wrapper,
  PostModalWrapper,
  ModalContent,
  ImageWrapper,
  PostContent,
  PostHeader,
  PostBody,
} from "./PostModal-styles";
// import { Modal } from "../../App-styles";
import { SubscribeButton } from "../../App-styles";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../services/PostsService";
import { receiveData } from "../../services/UserService";
import { useSelector, useDispatch } from "react-redux";
import { postModalOperations, postModalSelectors } from "../../store/postModal";
import { userSelectors } from "../../store/user";
import Comments from "../Comments/Comments";
import UsersModal from "../UsersModal/UsersModal";
import CommentForm from "../CommentForm/CommentForm";

const PostModal = () => {
  const modalRef = useRef(null);
  const path = useLocation().pathname;
  const postId = useParams().id;
  const [postData, setPostData] = useState(
    useSelector(postModalSelectors.getModalInfo())
  );
  const [showModal, setShowModal] = useState(false);
  // const [updateComments, setUpdateComments] = useState(false);
  const mainUsername = useSelector(userSelectors.getUser()).user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => {
    if (!showModal) {
      const mainPath = path.replace(`/p/${postId}`, "");
      dispatch(postModalOperations.clearPostInfo());
      if (mainPath !== "") navigate(`${mainPath}`);
      else navigate("/");
    }
  };

  const closeModalOnArea = (e) => {
    if (!modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (postData.username === null) {
      getPost(postId)
        .then((res) => res.json())
        .then((data) => {
          if (data.post) {
            setPostData((prevState) => {
              return { ...prevState, ...data.post };
            });
            receiveData({ id: data.post.userId }, "/api/user/get-user-data")
              .then((res) => res.json())
              .then((data) => {
                setPostData((prevState) => {
                  return {
                    ...prevState,
                    username: data.username,
                    profileImg: data.profileImg,
                  };
                });
                // setUpdateComments(false);
              });
          } else {
            navigate("/");
          }
        });
    }
  }, []);

  if (postData.username === null) {
    return null;
  }

  return (
    <Wrapper>
      <PostModalWrapper onClick={closeModalOnArea}>
        <ModalContent ref={modalRef}>
          <ImageWrapper></ImageWrapper>
          <PostContent>
            <PostHeader>
              <UserWrapper
                flex="1"
                profileImg={postData.profileImg}
                username={postData.username}
              />
              {mainUsername !== postData.username && (
                <SubscribeButton>Follow</SubscribeButton>
              )}
            </PostHeader>
            <PostBody>
              <Comments
                showAll
                comments={postData.comments}
                setShowModal={setShowModal}
                postId={postData.id}
              />
            </PostBody>
          </PostContent>
        </ModalContent>
        {showModal && <UsersModal setShowModal={setShowModal} />}
      </PostModalWrapper>
    </Wrapper>
  );
};

export default PostModal;

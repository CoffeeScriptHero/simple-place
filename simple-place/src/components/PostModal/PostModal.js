import { useRef, useEffect, useState } from "react";
import {
  Wrapper,
  PostModalWrapper,
  ModalContent,
  ImageWrapper,
  PostContent,
  PostHeader,
  PostBody,
  PostFooter,
  Image,
} from "./PostModal-styles";
import { SubscribeButton } from "../../App-styles";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../services/PostsService";
import { receiveData } from "../../services/UserService";
import { useSelector, useDispatch } from "react-redux";
import { postModalOperations, postModalSelectors } from "../../store/postModal";
import { userOperations, userSelectors } from "../../store/user";
import Comments from "../Comments/Comments";
import Comment from "../Comment/Comment";
import UsersModal from "../UsersModal/UsersModal";
import CommentForm from "../CommentForm/CommentForm";
import Icon from "../Icon/Icon";
import { getCookie } from "../../services/CookiesService";
import LikesSection from "../LikesSection/LikesSection";
import { modalHandler } from "../../services/UsersModalService";
import { likeHandler } from "../../services/PostsService";

const PostModal = () => {
  const modalRef = useRef(null);
  const path = useLocation().pathname;
  const postId = useParams().id;
  const [postData, setPostData] = useState(
    useSelector(postModalSelectors.getModalInfo())
  );
  const [comments, setComments] = useState(
    postData.comments ? postData.comments : []
  );
  const [showModal, setShowModal] = useState(false);
  const mainUserId = getCookie("id");
  const [isFilled, setIsFilled] = useState(
    postData.likes ? postData.likes.includes(mainUserId) : false
  );
  const [likesArr, setLikesArr] = useState(
    postData.likes ? postData.likes : []
  );
  const mainUsername = useSelector(userSelectors.getUser()).user;
  const following = useSelector(userSelectors.getUser()).following;
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

  const followingHandler = () => {
    dispatch(userOperations.followUser(postData.userId));
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(postData.userId));
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
            setIsFilled(data.post.likes.includes(mainUserId) ? true : false);
            setComments(data.post.comments);
            setLikesArr(data.post.likes);
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
              });
          } else {
            navigate("/");
          }
        });
    } else {
      setIsFilled(postData.likes.includes(mainUserId) ? true : false);
      setLikesArr(postData.likes);
    }
  }, []);

  if (postData.username === null) {
    return null;
  }

  return (
    <Wrapper>
      <PostModalWrapper onClick={closeModalOnArea}>
        <ModalContent ref={modalRef}>
          <ImageWrapper>
            <Image src={postData.image}></Image>
          </ImageWrapper>
          <PostContent>
            <PostHeader>
              <UserWrapper
                flex="1"
                profileImg={postData.profileImg}
                username={postData.username}
              />
              {mainUsername !== postData.username &&
                !following.includes(postData.userId) && (
                  <SubscribeButton onClick={followingHandler}>
                    Follow
                  </SubscribeButton>
                )}
              {mainUsername !== postData.username &&
                following.includes(postData.userId) && (
                  <SubscribeButton onClick={unfollowingHandler}>
                    Unfollow
                  </SubscribeButton>
                )}
            </PostHeader>
            <PostBody>
              <Comment
                mainUserId={postData.userId}
                username={postData.username}
                profileImg={postData.profileImg}
                text={postData.description}
                isDescription={true}
              />
              <Comments
                showAll
                comments={comments}
                userId={postData.userId}
                postId={postId}
                setComments={setComments}
                setShowModal={setShowModal}
              />
            </PostBody>
            <PostFooter>
              <Icon
                type="like"
                pointer
                padding={"15px 35px 15px 16px"}
                stroke={isFilled ? "red" : "black"}
                color={isFilled ? "red" : "none"}
                onClick={likeHandler.bind(
                  this,
                  setIsFilled,
                  isFilled,
                  setLikesArr,
                  likesArr,
                  postId,
                  mainUserId
                )}
              />
              <LikesSection
                inline
                padding={"0 35px 0 16px"}
                likes={likesArr}
                id={postId}
                handler={modalHandler.bind(
                  this,
                  dispatch,
                  postId,
                  setShowModal
                )}
              />
              <CommentForm
                isModal={true}
                postId={postId}
                setComments={setComments}
              />
            </PostFooter>
          </PostContent>
        </ModalContent>
        {showModal && <UsersModal setShowModal={setShowModal} />}
      </PostModalWrapper>
    </Wrapper>
  );
};

export default PostModal;

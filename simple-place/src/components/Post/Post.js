import React, { useEffect, useState } from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
  IconsWrapper,
  Description,
  ShowMore,
} from "./Post-styles";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { receiveData } from "../../services/UserService";
import Username from "../Username/Username";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postModalOperations } from "../../store/postModal";
import { likeHandler } from "../../services/PostsService";
import LikesSection from "../LikesSection/LikesSection";
import { modalHandler } from "../../services/UsersModalService";

const Post = ({
  img,
  userId,
  postId,
  mainUserId,
  likes,
  liked,
  desc,
  postComments,
  setShowModal,
}) => {
  const [showDesc, setShowDesc] = useState(true);
  const [userData, setUserData] = useState({
    username: null,
    profileImg: null,
  });
  const [likesArr, setLikesArr] = useState(likes);
  const [isFilled, setIsFilled] = useState(liked);
  const [comments, setComments] = useState(postComments);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFilled(liked);
    receiveData({ id: userId }, "/api/user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        setUserData({ username: data.username, profileImg: data.profileImg });
      });
  }, [liked]);

  const postModalHandler = () => {
    dispatch(
      postModalOperations.setPostInfo({
        username: userData.username,
        profileImg: userData.profileImg,
        image: img,
        likes: likesArr,
        userId: userId,
        comments: comments,
        description: desc,
      })
    );
    navigate(`p/${postId}`);
  };

  const showMoreHandler = (e) => {
    e.target.textContent = !showDesc ? "more" : " less";
    setShowDesc(!showDesc);
  };

  if (userData.username === null) return "";

  return (
    <Article>
      <Header>
        <UserWrapper
          profileImg={userData.profileImg}
          username={userData.username}
        />
      </Header>
      <Main>
        <Image src={img}></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          {/* вынести в глобальные стили */}
          <Icon
            pointer
            margin={"0 10px 0 0"}
            type="like"
            stroke={isFilled ? "red" : "black"}
            color={isFilled ? "red" : "none"}
            onClick={likeHandler.bind(
              this,
              setIsFilled,
              isFilled,
              setLikesArr,
              likes,
              postId,
              mainUserId
            )}
          />
          <Icon pointer type="comment" onClick={postModalHandler} />
        </IconsWrapper>
        <LikesSection
          likes={likesArr}
          id={postId}
          handler={modalHandler.bind(this, dispatch, postId, setShowModal)}
        />
        <Description>
          <Username
            username={userData.username}
            margin={"0 10px 0 0 "}
            weight={"700"}
            decoration={"underline"}
          />
          {desc.length < 50 && desc}
          {desc.length >= 50 && showDesc && desc.slice(0, 48) + "..."}
          {desc.length >= 50 && !showDesc && desc}
          {desc.length >= 50 && (
            <ShowMore onClick={showMoreHandler}>more</ShowMore>
          )}
        </Description>
        <Comments
          showAll={false}
          comments={comments}
          setComments={setComments}
          postModalHandler={postModalHandler}
        />
        <CommentForm postId={postId} setComments={setComments} />
      </Footer>
    </Article>
  );
};

export default Post;

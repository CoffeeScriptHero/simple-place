import React, { useEffect, useState } from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
  IconsWrapper,
  LikesNumber,
  LikesText,
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
import { updateLikes } from "../../services/PostsService";

const Post = ({
  img,
  userId,
  postId,
  mainUserId,
  likes,
  desc,
  postComments,
  modalHandler,
}) => {
  const [showDesc, setShowDesc] = useState(true);
  const [userData, setUserData] = useState({
    username: null,
    profileImg: null,
  });
  const [isFilled, setIsFilled] = useState(
    likes.includes(mainUserId) ? true : false
  );
  const [likesArr, setLikesArr] = useState(likes);
  const [comments, setComments] = useState(postComments);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    receiveData({ id: userId }, "/api/user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        setUserData({ username: data.username, profileImg: data.profileImg });
      });
  }, []);

  const postModalHandler = () => {
    dispatch(
      postModalOperations.setPostInfo({
        username: userData.username,
        profileImg: userData.profileImg,
        image: img,
        likes: likesArr,
        comments: comments,
        description: desc,
      })
    );
    navigate(`p/${postId}`);
  };

  const likeHandler = () => {
    setIsFilled((prevState) => !prevState);
    if (!isFilled) {
      likes.push(mainUserId);
    } else {
      const userIndex = likes.indexOf(mainUserId);
      likes.splice(userIndex, userIndex + 1);
    }
    setLikesArr(likes);
    updateLikes(postId, likes, "post");
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
            onClick={likeHandler}
          />
          <Icon pointer type="comment" onClick={postModalHandler} />
        </IconsWrapper>
        {likes.length === 0 && (
          <LikesText>
            Be the first to{" "}
            <LikesText bold inline>
              like it
            </LikesText>
          </LikesText>
        )}
        {likes.length > 0 && (
          <LikesText bold pointer onClick={modalHandler.bind(this, postId)}>
            {likesArr.length} liked
          </LikesText>
        )}
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

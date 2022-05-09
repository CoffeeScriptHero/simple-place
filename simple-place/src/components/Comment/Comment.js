import React, { useEffect } from "react";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";
import {
  CommentWrapper,
  ContentWrapper,
  Text,
  LikeWrapper,
  ProfileImgWrapper,
  LikesText,
} from "./Comment-styles";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { updateCommentLikes } from "../../services/PostsService";
import { receiveData } from "../../services/UserService";

const Comment = ({
  commentId,
  mainUserId,
  // userId,
  username,
  profileImg,
  text,
  likes,
  modalHandler,
}) => {
  const [isFilled, setIsFilled] = useState(
    likes.includes(mainUserId) ? true : false
  );
  const [likesArr, setLikesArr] = useState(likes);
  // const [username, setUsername] = useState(null);
  // const [img, setImg] = useState(null);

  const likeHandler = () => {
    setIsFilled((prevState) => !prevState);
    if (!isFilled) {
      likes.push(mainUserId);
    } else {
      const userIndex = likes.indexOf(mainUserId);
      likes.splice(userIndex, userIndex + 1);
    }
    setLikesArr(likes);
    updateCommentLikes(commentId, likes, username);
  };

  // useEffect(() => {
  //   receiveData({ id: userId }, "/api/user/get-user-data")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsername(data.username);
  //       setImg(data.profileImg);
  //     });
  // }, []);

  return (
    <CommentWrapper>
      <ProfileImgWrapper>
        <ProfileIcon src={profileImg} width="34px" height="34px" />
      </ProfileImgWrapper>
      <ContentWrapper>
        <Username
          username={username}
          margin="0 10px 0 0"
          weight="700"
          fontSize="14px"
        />
        <Text>{text}</Text>
        <LikeWrapper>
          <Icon
            type="like"
            width="12.5"
            height="11"
            pointer
            stroke={isFilled ? "red" : "black"}
            color={isFilled ? "red" : "none"}
            onClick={likeHandler}
          />
        </LikeWrapper>
        {likesArr.length > 0 && (
          <LikesText onClick={modalHandler.bind(this, likesArr, username)}>
            {likesArr.length} {likesArr.length === 1 ? "like" : "likes"}
          </LikesText>
        )}
      </ContentWrapper>
    </CommentWrapper>
  );
};

export default Comment;

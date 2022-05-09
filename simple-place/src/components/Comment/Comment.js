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
import { updateLikes } from "../../services/PostsService";

const Comment = ({
  commentId,
  mainUserId,
  username,
  profileImg,
  text,
  likes = [],
  modalHandler,
  isDescription = false,
}) => {
  const [isFilled, setIsFilled] = useState(
    likes.includes(mainUserId) ? true : false
  );
  const [likesArr, setLikesArr] = useState(likes);

  const likeHandler = () => {
    setIsFilled((prevState) => !prevState);
    if (!isFilled) {
      likes.push(mainUserId);
    } else {
      const userIndex = likes.indexOf(mainUserId);
      likes.splice(userIndex, userIndex + 1);
    }
    setLikesArr(likes);
    updateLikes(commentId, likes, "comment");
  };

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
        {!isDescription && (
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
        )}
        {likesArr.length > 0 && !isDescription && (
          <LikesText onClick={modalHandler.bind(this, commentId)}>
            {likesArr.length} {likesArr.length === 1 ? "like" : "likes"}
          </LikesText>
        )}
      </ContentWrapper>
    </CommentWrapper>
  );
};

export default Comment;

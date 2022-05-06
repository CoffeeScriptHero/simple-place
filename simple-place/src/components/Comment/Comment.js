import React from "react";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";
import {
  CommentWrapper,
  ContentWrapper,
  Text,
  LikeWrapper,
  LikesText,
} from "./Comment-styles";
import Icon from "../Icon/Icon";
import { useState } from "react";

const Comment = ({
  mainUserId,
  img,
  username,
  text,
  likes = [],
  modalHandler,
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
  };

  return (
    <CommentWrapper>
      <ProfileIcon src={img} width="34px" height="34px" />
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
      </ContentWrapper>
      {likesArr.length > 0 && (
        <LikesText onClick={modalHandler}>
          {likesArr.length} {likesArr.length === 1 ? "like" : "likes"}
        </LikesText>
      )}
    </CommentWrapper>
  );
};

export default Comment;

import React from "react";
import {
  PostPreview,
  PostInfo,
  Wrapper,
  Stat,
  InfoText,
} from "./UserPost-styles";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

const UserPost = ({ id, img, likes, comments }) => {
  const navigate = useNavigate();

  const postModalHandler = () => {
    navigate(`p/${id}`);
  };
  return (
    <Wrapper>
      <PostPreview img={img} onClick={postModalHandler}></PostPreview>
      <Stat>
        <PostInfo>
          <Icon type="like" stroke={"white"} color={"white"}></Icon>
          <InfoText>{likes}</InfoText>
        </PostInfo>
        <PostInfo>
          <Icon type="previewcomment" stroke={"white"} color={"white"}></Icon>
          <InfoText>{comments.length}</InfoText>
        </PostInfo>
      </Stat>
    </Wrapper>
  );
};

export default UserPost;

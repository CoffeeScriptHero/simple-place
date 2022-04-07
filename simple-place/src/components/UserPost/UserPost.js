import React from "react";
import {
  PostPreview,
  PostInfo,
  Wrapper,
  Stat,
  InfoText,
} from "./UserPost-styles";
import Icon from "../Icon/Icon";

const UserPost = ({ img, likes, comments }) => {
  return (
    <Wrapper>
      <PostPreview img={img}></PostPreview>
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

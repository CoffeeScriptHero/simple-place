import React from "react";
import { PostPreview, PostInfo, Wrapper } from "./UserPost-styles";
import Icon from "../Icon/Icon";

const UserPost = ({ img }) => {
  return (
    <Wrapper>
      <PostPreview img={img}></PostPreview>
      <PostInfo>
        <Icon type="like"></Icon>
      </PostInfo>
    </Wrapper>
  );
};

export default UserPost;

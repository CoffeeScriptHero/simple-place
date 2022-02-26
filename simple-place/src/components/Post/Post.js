import React from "react";
import { Article, Header, Username } from "./Post-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Icon from "../Icon/Icon";

const Post = () => {
  return (
    <Article>
      <Header>
        <ProfileIcon
          src={
            "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
          }
          width={"34px"}
          height={"34px"}
        />
        <Username>denya_aquapark</Username>
        <Icon type="like" />
        <Icon type="comment" />
      </Header>
    </Article>
  );
};

export default Post;

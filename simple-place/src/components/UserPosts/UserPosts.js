import React from "react";
import { GridWrapper } from "./UserPosts-styles";
import UserPost from "../UserPost/UserPost";

const UserPosts = ({ posts }) => {
  const postsList = posts.map((p) => (
    <UserPost
      img={p.image}
      likes={p.likes}
      comments={p.comments}
      key={p.id}
    ></UserPost>
  )); // добавить колво лайков

  return <GridWrapper>{postsList}</GridWrapper>;
};

export default UserPosts;

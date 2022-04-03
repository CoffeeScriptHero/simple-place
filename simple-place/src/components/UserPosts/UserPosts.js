import React from "react";
import { GridWrapper } from "./UserPosts-styles";
import UserPost from "../UserPost/UserPost";

const UserPosts = ({ posts }) => {
  console.log(posts);
  const postsList = posts.map((p) => (
    <UserPost key={p.id} img={p.image}></UserPost>
  ));

  return (
    <GridWrapper>
      {postsList}
      {postsList}
      {postsList}
    </GridWrapper>
  );
};

export default UserPosts;

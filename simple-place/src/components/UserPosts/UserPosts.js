import React, { useEffect, useState } from "react";
import {
  Wrapper,
  NoUserWrapper,
  NoUserText,
  PostsWrapper,
} from "./UserPosts-styles";
import Icon from "../Icon/Icon";
import UserPost from "../UserPost/UserPost";
import Loader from "../Loader/Loader";

const UserPosts = ({ posts, postsLoaded }) => {
  const postsList = posts.map((p) => (
    <UserPost
      img={p.image}
      likes={p.likes}
      comments={p.comments}
      key={p.id}
    ></UserPost>
  ));

  if (!postsLoaded) return <Loader />;

  return (
    <Wrapper>
      {posts.length === 0 && (
        <Wrapper height={"400px"}>
          <NoUserWrapper>
            <Icon type={"framephoto"} width={"90px"} height={"90px"} />
            <NoUserText>There is no posts yet..</NoUserText>
          </NoUserWrapper>
        </Wrapper>
      )}
      {posts.length > 0 && <PostsWrapper>{postsList}</PostsWrapper>}
    </Wrapper>
  );
};

export default UserPosts;

import React, { useEffect, useState } from "react";
import { Section } from "./Posts-styles";
import Post from "../Post/Post";
import { getAllPosts } from "../../services/PostsService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const postsList = posts.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      img={p.image}
      userId={p.userId}
      likes={p.likes}
      desc={p.description}
      comments={p.comments}
    />
  ));

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return <Section>{postsList}</Section>;
};

export default Posts;

import React, { useEffect, useState } from "react";
import { Section } from "./Posts-styles";
import Post from "../Post/Post";
import { getAllPosts } from "../../services/PostsService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const postsList = posts.map((p) => (
    <Post
      key={p.id}
      img={p.image}
      userId={p.userId}
      likes={p.likes}
      desc={p.description}
      comments={p.comments}
    />
  ));

  useEffect(() => {
    getAllPosts()
      .then((res) => res.json())
      .then((res) => {
        console.log(res.posts);
        setPosts(res.posts);
      });
  }, []);

  return (
    <Section>
      {postsList}
      {/* <Post
        avatar={
          "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
        }
        username={"denya_aquapark"}
        img={
          "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/msyJ2kVdCzoy6ChWjSE6b0D5.jpg"
        }
        likes={54}
        desc={
          "оноаiвлавьiьвлiфвьiлфвлiвьлiлвьiльввiльвфiьвфiльвiiльвлiвльiвiфьлвьiфdsapldksa,dsal;,dlas,d,l;sa,ldsa "
        }
        comments={[
          { ph_aquapark: "nice post" },
          { ph_aquapark: "nice post" },
          { ph_aquapark: "nice post" },
        ]}
      />

      <Post
        avatar={
          "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
        }
        username={"lol"}
        img={`https://res.cloudinary.com/drrhht2jy/image/upload/v1635592798/denya_aquapark_post_1.jpg`}
        likes={42343}
        desc={"wtf"}
        comments={[]}
      /> */}
    </Section>
  );
};

export default Posts;

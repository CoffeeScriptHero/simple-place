import React, { useEffect, useState } from "react";
import { Section } from "./Posts-styles";
import Post from "../Post/Post";
import { getAllPosts } from "../../services/PostsService";
import UsersModal from "../UsersModal/UsersModal";
import { getCookie } from "../../services/CookiesService";
import { userSelectors } from "../../store/user";
import { useSelector } from "react-redux";

const Posts = () => {
  const mainUserId = getCookie("id");
  const user = useSelector(userSelectors.getUser());
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const postsList = posts.map((p) => (
    <Post
      key={p.id}
      postId={p.id}
      img={p.image}
      userId={p.userId}
      mainUserId={mainUserId}
      likes={p.likes}
      liked={p.likes.includes(mainUserId)}
      desc={p.description}
      postComments={p.comments}
      setShowModal={setShowModal}
    />
  ));

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts.reverse());
      });
  }, [user]);

  return (
    <Section>
      {postsList}
      {showModal && <UsersModal setShowModal={setShowModal} />}
    </Section>
  );
};

export default Posts;

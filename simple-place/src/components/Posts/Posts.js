import React, { useEffect, useState } from "react";
import { Section } from "./Posts-styles";
import Post from "../Post/Post";
import { getAllPosts } from "../../services/PostsService";
import UsersModal from "../UsersModal/UsersModal";
import { useDispatch, useSelector } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";
import { userSelectors } from "../../store/user";

const Posts = () => {
  const dispatch = useDispatch();
  const mainUserId = useSelector(userSelectors.getUser()).id;
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const modalHandler = (postId) => {
    dispatch(usersModalOperations.setNewModalType("Likes"));
    dispatch(usersModalOperations.getLiked(postId, "post"));
    setShowModal(true);
  };

  const postsList = posts.map((p) => (
    <Post
      key={p.id}
      postId={p.id}
      img={p.image}
      userId={p.userId}
      mainUserId={mainUserId}
      likes={p.likes}
      desc={p.description}
      postComments={p.comments}
      modalHandler={modalHandler}
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

  return (
    <Section>
      {postsList}
      {showModal && <UsersModal setShowModal={setShowModal} />}
    </Section>
  );
};

export default Posts;

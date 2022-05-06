import React from "react";
import { CommentsWrapper } from "./Comments-styles";
import { ShowAll } from "./Comments-styles";
import Comment from "../Comment/Comment";
import { userSelectors } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";

const Comments = ({ showAll, comments, setShowModal }) => {
  const mainUserId = useSelector(userSelectors.getUser()).id;
  const dispatch = useDispatch();

  const modalHandler = (users) => {
    dispatch(usersModalOperations.setNewModalType("Likes"));
    dispatch(usersModalOperations.getLiked(users));
    setShowModal(true);
  };

  const commentsList = comments.map((c) => (
    <Comment
      key={c.img}
      mainUserId={mainUserId}
      text={c.text}
      img={c.img}
      username={c.username}
      modalHandler={modalHandler}
    />
  ));

  return (
    <CommentsWrapper>
      {comments.length >= 1 && !showAll && (
        <ShowAll>Show all comments ({comments.length})</ShowAll>
      )}
      {comments.length >= 1 && showAll && commentsList}
    </CommentsWrapper>
  );
};

export default Comments;

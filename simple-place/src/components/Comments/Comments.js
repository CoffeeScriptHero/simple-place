import React from "react";
import { CommentsWrapper, ShowAll } from "./Comments-styles";
import Comment from "../Comment/Comment";
import { userSelectors } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";

const Comments = ({
  showAll,
  comments,
  setShowModal,
  postModalHandler = null,
}) => {
  const mainUserId = useSelector(userSelectors.getUser()).id;
  const dispatch = useDispatch();

  const modalHandler = (commentId) => {
    dispatch(usersModalOperations.setNewModalType("Likes"));
    dispatch(usersModalOperations.getLiked(commentId, "comment"));
    setShowModal(true);
  };

  const commentsList = comments.map((c) => (
    <Comment
      key={c._id}
      commentId={c._id}
      mainUserId={mainUserId}
      text={c.text}
      username={c.username}
      profileImg={c.profileImg}
      likes={c.likes}
      modalHandler={modalHandler}
    />
  ));

  return (
    <CommentsWrapper>
      {comments.length >= 1 && !showAll && (
        <ShowAll onClick={postModalHandler}>
          Show all comments ({comments.length})
        </ShowAll>
      )}
      {comments.length >= 1 && showAll && commentsList}
    </CommentsWrapper>
  );
};

export default Comments;

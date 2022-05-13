import { CommentsWrapper, ShowAll } from "./Comments-styles";
import Comment from "../Comment/Comment";
import { useDispatch } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";
import { getCookie } from "../../services/CookiesService";

const Comments = ({
  showAll,
  comments,
  setShowModal,
  setComments = null,
  postId = null,
  postModalHandler = null,
}) => {
  const dispatch = useDispatch();
  const mainUserId = getCookie("id");

  const modalHandler = (commentId) => {
    dispatch(usersModalOperations.setNewModalType("Likes"));
    dispatch(usersModalOperations.getLiked(commentId, "comment"));
    setShowModal(true);
  };

  const commentsList = comments.map((c) => (
    <Comment
      key={c._id}
      commentId={c._id}
      text={c.text}
      likes={c.likes}
      username={c.username}
      profileImg={c.profileImg}
      setComments={setComments}
      mainUserId={mainUserId}
      userId={c.userId}
      postId={postId}
      comments={comments}
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

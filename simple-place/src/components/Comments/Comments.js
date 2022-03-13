import React from "react";
import { CommentsWrapper } from "./Comments-styles";
import { ShowAll } from "./Comments-styles";

const Comments = ({ showAll, comments }) => {
  //   const commentsList = 3;
  return (
    <CommentsWrapper>
      {comments.length >= 1 && !showAll && (
        <ShowAll>Show all comments ({comments.length})</ShowAll>
      )}
      {/* {comments.length >= 1 && showAll && commentsList} */}
    </CommentsWrapper>
  );
};

export default Comments;

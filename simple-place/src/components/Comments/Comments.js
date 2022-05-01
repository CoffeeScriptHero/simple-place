import React from "react";
import { CommentsWrapper } from "./Comments-styles";
import { ShowAll } from "./Comments-styles";

const Comments = ({ showAll, comments }) => {
  // const commentsList = comments.map((c))

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

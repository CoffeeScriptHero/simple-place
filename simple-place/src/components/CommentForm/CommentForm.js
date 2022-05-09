import React, { useState } from "react";
import { useRef } from "react";
import { Form, TextAreaWrapper, TextArea, Submit } from "./CommentForm-styles";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import { createComment } from "../../services/PostsService";

const CommentForm = ({ postId, setComments }) => {
  const textRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFullText, setIsFullText] = useState(false);
  const userId = useSelector(userSelectors.getUser()).id;

  const textHandler = () => {
    if (textRef.current.scrollHeight <= 89) {
      textRef.current.style.height = textRef.current.scrollHeight - 4 + "px";
      if (isFullText) setIsFullText(false);
    } else if (!isFullText) {
      setIsFullText(true);
    }
    if (textRef.current.value.trim() !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createComment(postId, userId, textRef.current.value)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      });
    textRef.current.value = "";
    setIsActive(false);
  };

  return (
    <Form>
      <TextAreaWrapper>
        <TextArea
          placeholder={"Write something.."}
          ref={textRef}
          onInput={textHandler}
          isFullText={isFullText}
        ></TextArea>
        <Submit isActive={isActive} onClick={submitHandler.bind(this)}>
          Publish
        </Submit>
      </TextAreaWrapper>
    </Form>
  );
};

export default CommentForm;

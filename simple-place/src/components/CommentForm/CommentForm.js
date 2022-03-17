import React, { useState } from "react";
import { useRef } from "react";
import { Form, TextAreaWrapper, TextArea, Submit } from "./CommentForm-styles";

const CommentForm = () => {
  const textRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFullText, setIsFullText] = useState(false);

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

  return (
    <Form>
      <TextAreaWrapper>
        <TextArea
          placeholder={"Write something.."}
          ref={textRef}
          onInput={textHandler}
          isFullText={isFullText}
        ></TextArea>
        <Submit isActive={isActive}>Publish</Submit>
      </TextAreaWrapper>
    </Form>
  );
};

export default CommentForm;

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {
  Form,
  TextAreaWrapper,
  TextArea,
  Submit,
} from "./CommentaryForm-styles";

const CommentaryForm = () => {
  const textRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const textHandler = () => {
    const textArea = textRef.current;
    if (textArea.value.trim() !== "") {
      textArea.style.height = textArea.scrollHeight - 4 + "px";
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    textRef.current.style.height = "18px";
  }, []);

  return (
    <Form>
      <TextAreaWrapper>
        <TextArea
          placeholder={"Write something.."}
          ref={textRef}
          onChange={textHandler}
        ></TextArea>
        <Submit isActive={isActive}>Publish</Submit>
      </TextAreaWrapper>
    </Form>
  );
};

export default CommentaryForm;

import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  SmileWrapper,
  TextAreaWrapper,
  PickerWrapper,
  TextArea,
  Submit,
} from "./CommentForm-styles";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import { createComment } from "../../services/PostsService";
import { postModalOperations } from "../../store/postModal";
import Icon from "../Icon/Icon";
import Picker from "emoji-picker-react";

const CommentForm = ({ postId, setComments, isModal }) => {
  const dispatch = useDispatch();
  const textRef = useRef(null);
  const pickerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFullText, setIsFullText] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const userId = useSelector(userSelectors.getUser()).id;
  const maxSize = isModal ? 40 : 89;

  const textHandler = () => {
    if (textRef.current.scrollHeight <= maxSize) {
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

  const pickerHandler = () => {
    setShowPicker((prevState) => !prevState);
  };

  const onEmojiClick = (event, emojiObject) => {
    if (!isActive) setIsActive(true);
    textRef.current.value += emojiObject.emoji;
  };

  const closePickerHandler = (e) => {
    if (
      showPicker &&
      pickerRef.current &&
      !pickerRef.current.contains(e.target)
    ) {
      setShowPicker(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createComment(postId, userId, textRef.current.value)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        dispatch(postModalOperations.updateComments(data.comments));
      });
    textRef.current.value = "";
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", closePickerHandler);
    return () => {
      document.removeEventListener("click", closePickerHandler);
    };
  });

  return (
    <Form>
      <TextAreaWrapper>
        {showPicker && (
          <PickerWrapper ref={pickerRef}>
            <Picker onEmojiClick={onEmojiClick} />
          </PickerWrapper>
        )}
        <SmileWrapper isModal={isModal}>
          <Icon type="smile" pointer onClick={pickerHandler} />
        </SmileWrapper>
        <TextArea
          placeholder={"Write something.."}
          ref={textRef}
          onInput={textHandler}
          isFullText={isFullText}
        ></TextArea>
        <Submit
          isModal={isModal}
          isActive={isActive}
          onClick={submitHandler.bind(this)}
        >
          Publish
        </Submit>
      </TextAreaWrapper>
    </Form>
  );
};

export default CommentForm;

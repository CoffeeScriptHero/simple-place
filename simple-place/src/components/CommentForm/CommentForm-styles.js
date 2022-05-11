import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
  height: 100%;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  padding: 10px 7px 10px 7px;
  position: relative;
`;

export const TextArea = styled.textarea`
  outline: none;
  font-family: Quicksand;
  border: none;
  resize: none;
  overflow-y: ${(props) => (props.isFullText ? "scroll" : "hidden")};
  box-sizing: border-box;
  margin-left: 16px;
  width: 83%;
  font-size: 14px;
  height: 19px;
`;

export const Submit = styled.button.attrs((props) => ({
  disabled: props.isActive ? false : true,
}))`
  border: none;
  margin-left: 10px;
  padding: 5px 0 0 0;
  height: 25px;
  font-size: 14px;
  background: transparent;
  color: #5551ff;
  line-height: normal;
  position: ${(props) => (props.isModal ? "absolute" : "static")};
  right: 15px;
  top: 10px;
  opacity: ${(props) => (props.isActive ? "1" : "0.3")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

import styled from "styled-components";

export const UploadImgWrapper = styled.div`
  display: flex;
  height: calc(100% - 44px);
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const InnerUploadWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: 700;
  display: block;
  text-align: center;
`;

export const UploadButton = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  background: #5551ff;
  font-weight: 700;
  border-radius: 3%;
  width: 160px;
  height: 30px;
  margin-bottom: 30px;
`;

import styled from "styled-components";

export const UploadImgWrapper = styled.div`
  display: flex;
  height: 540px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const InnerUploadWrapper = styled.div`
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  object-fit: contain;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
  width: "100%",
}))`
  max-height: 540px;
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

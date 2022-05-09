import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  align-items: start;
  position: relative;
  margin-bottom: 25px;
`;

export const ProfileImgWrapper = styled.div`
  width: 34px;
  height: 34px;
`;

export const ContentWrapper = styled.div`
  padding-left: 12px;
`;

export const Text = styled.span``;

export const LikeWrapper = styled.div`
  position: absolute;
  right: -20px;
  top: 5px;
`;

export const LikesText = styled.span`
  position: absolute;
  font-size: 13.5px;
  bottom: -18px;
  left: 55px;
  color: rgba(var(--f52, 142, 142, 142), 1);
  cursor: pointer;
`;

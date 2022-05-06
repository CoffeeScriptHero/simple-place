import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  align-items: start;
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-left: 10px;
`;

export const Text = styled.span``;

export const LikeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
`;

export const LikesText = styled.span`
  position: absolute;
  font-size: 13.5px;
  bottom: -18px;
  left: 35px;
  color: rgba(var(--f52, 142, 142, 142), 1);
  cursor: pointer;
`;

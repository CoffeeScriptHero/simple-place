import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${(props) => props.height || "auto"};
`;

export const NoUserWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoUserText = styled.span`
  font-family: Segoe UI;
  font-size: 18px;
`;

export const PostsWrapper = styled.section`
  margin: 15px 0 0 0;
  display: flex;
  flex-wrap: wrap;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  width: 615px;
  height: 800px;
  border: 1px solid grey;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 0 15px 16px;
`;

export const Username = styled(Link)`
  margin-left: 15px;
  font-family: Quicksand;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: ${(props) => props.decoration || "none"};
  }
  font-weight: ${(props) => props.weight || "400"};
  margin: ${(props) => props.margin || "0"};
`;

export const Main = styled.section``;

export const Footer = styled.section``;

export const Image = styled.img.attrs((props) => ({
  src:
    props.src ||
    "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg",
}))``;

export const IconsWrapper = styled.div`
  display: flex;
  padding: 6px 16px 8px;
`;

export const LikesNumber = styled.span``;

export const LikesText = styled.span`
  display: block;
  padding: 10px 16px;
  font-weight: 700;
`;

export const Description = styled.span`
  padding: 0 0 0 16px;
`;

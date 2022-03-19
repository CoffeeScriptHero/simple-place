import styled from "styled-components";
import { Link } from "react-router-dom";

const POST_PD_LEFT = "16px";
//post padding-left distance (description, icons, likes, etc..)

export const Article = styled.article`
  width: 615px;
  min-height: 550px;
  max-height: 1500px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  margin-bottom: 300px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 0 15px ${POST_PD_LEFT};
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
  src: props.src || "#",
}))`
  width: 100%;
  height: 100%;
`;

export const IconsWrapper = styled.div`
  display: flex;
  padding: 6px ${POST_PD_LEFT} 8px;
`;

export const LikesNumber = styled.span``;

export const LikesText = styled.span`
  display: block;
  padding: 10px ${POST_PD_LEFT};
  font-weight: 700;
`;

export const Description = styled.span`
  padding-left: ${POST_PD_LEFT};
  display: block;
  overflow-x: hidden;
`;

export const ShowMore = styled.span`
  color: grey;
  font-size: 14px;
  cursor: pointer;
`;

export const Commentaries = styled.div``;

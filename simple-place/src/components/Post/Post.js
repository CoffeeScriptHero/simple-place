import React, { useEffect, useState } from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
  Username,
  IconsWrapper,
  LikesNumber,
  LikesText,
  Description,
  ShowMore,
} from "./Post-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { sendUserData } from "../../services/UserService";

const Post = ({ img, userId, likes, desc, comments }) => {
  const [showDesc, setShowDesc] = useState(true);
  const [username, setUsername] = useState(null);
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    sendUserData({ id: userId }, "/api/user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username);
        setProfileImg(data.profileImg);
      });
  }, []);

  const showMoreHandler = (e) => {
    e.target.textContent = !showDesc ? "more" : " less";
    setShowDesc(!showDesc);
  };

  return (
    <Article>
      <Header>
        <ProfileIcon src={profileImg} width={"34px"} height={"34px"} />
        <Username to={`/${username}`} margin={"0 0 0 10px "} weight={"500"}>
          {username}
        </Username>
      </Header>
      <Main>
        <Image src={img}></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          {/* вынести в глобальные стили */}
          <Icon margin={"0 10px 0 0"} type="like" />
          <Icon type="comment" />
        </IconsWrapper>
        <LikesText>
          <LikesNumber>{likes}</LikesNumber> liked
        </LikesText>
        <Description>
          <Username
            margin={"0 10px 0 0 "}
            weight={"700"}
            to={`/${username}`}
            decoration={"underline"}
          >
            {username}
          </Username>
          {desc.length < 50 && desc}
          {desc.length >= 50 && showDesc && desc.slice(0, 48) + "..."}
          {desc.length >= 50 && !showDesc && desc}
          {desc.length >= 50 && (
            <ShowMore onClick={showMoreHandler}>more</ShowMore>
          )}
        </Description>
        <Comments showAll={false} comments={comments} />
        <CommentForm />
      </Footer>
    </Article>
  );
};

export default Post;

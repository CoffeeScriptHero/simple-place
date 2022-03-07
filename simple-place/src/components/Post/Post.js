import React, { useState } from "react";
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

const Post = ({ avatar, username, img, likes, desc }) => {
  const [showDesc, setShowDesc] = useState(true);

  const showMoreHandler = (e) => {
    e.target.textContent = !showDesc ? "more" : "less";
    setShowDesc(!showDesc);
  };

  return (
    <Article>
      <Header>
        <ProfileIcon src={avatar} width={"34px"} height={"34px"} />
        <Username to={`/${username}`}>{username}</Username>
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
          {desc.length >= 50 && desc.slice(0, 51) + "... "}
          {desc.length >= 50 && (
            <ShowMore onClick={showMoreHandler}>more</ShowMore>
          )}
        </Description>
      </Footer>
    </Article>
  );
};

export default Post;

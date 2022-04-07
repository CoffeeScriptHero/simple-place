import React, { useEffect, useState } from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
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
import Username from "../Username/Username";

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

  if (username === null) return "";

  return (
    <Article>
      <Header>
        <ProfileIcon
          src={profileImg}
          width={"34px"}
          height={"34px"}
          username={username}
        />
        <Username username={username} margin={"0 0 0 10px "} weight={"500"} />
      </Header>
      <Main>
        <Image src={img}></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          {/* вынести в глобальные стили */}
          <Icon pointer margin={"0 10px 0 0"} type="like" />
          <Icon pointer type="comment" />
        </IconsWrapper>
        <LikesText>
          <LikesNumber>{likes}</LikesNumber> liked
        </LikesText>
        <Description>
          <Username
            username={username}
            margin={"0 10px 0 0 "}
            weight={"700"}
            decoration={"underline"}
          />
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

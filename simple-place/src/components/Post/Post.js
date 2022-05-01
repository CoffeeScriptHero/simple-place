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
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { receiveData } from "../../services/UserService";
import Username from "../Username/Username";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postModalOperations } from "../../store/postModal";

const Post = ({ id, img, userId, likes, desc, comments }) => {
  const [showDesc, setShowDesc] = useState(true);
  const [userData, setUserData] = useState({
    username: null,
    profileImg: null,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    receiveData({ id: userId }, "/api/user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        setUserData({ username: data.username, profileImg: data.profileImg });
      });
  }, []);

  const postModalHandler = () => {
    dispatch(
      postModalOperations.setPostInfo({
        username: userData.username,
        profileImg: userData.profileImg,
        image: img,
        likes: likes,
        comments: comments,
        description: desc,
      })
    );
    navigate(`p/${id}`);
  };

  const showMoreHandler = (e) => {
    e.target.textContent = !showDesc ? "more" : " less";
    setShowDesc(!showDesc);
  };

  if (userData.username === null) return "";

  return (
    <Article>
      <Header>
        <UserWrapper
          profileImg={userData.profileImg}
          username={userData.username}
        />
      </Header>
      <Main>
        <Image src={img}></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          {/* вынести в глобальные стили */}
          <Icon pointer margin={"0 10px 0 0"} type="like" />
          <Icon pointer type="comment" onClick={postModalHandler} />
        </IconsWrapper>
        <LikesText>
          <LikesNumber>{likes}</LikesNumber> liked
        </LikesText>
        <Description>
          <Username
            username={userData.username}
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
        <CommentForm comments={comments} />
      </Footer>
    </Article>
  );
};

export default Post;

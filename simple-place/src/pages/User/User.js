import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendUserData } from "../../services/UserService";
import { getUserPosts } from "../../services/PostsService";
import Loader from "../../components/Loader/Loader";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import {
  UserContainer,
  InfoWrapper,
  Username,
  UserInfo,
  InfoText,
  Message,
  AccountInfo,
  Number,
} from "./User-styles";
import UserPosts from "../../components/UserPosts/UserPosts";
import { useDispatch } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";
import { useNavigate, Outlet } from "react-router-dom";

const User = () => {
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([null]);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useParams().username;

  const userModalHandler = (type) => {
    dispatch(usersModalOperations.setNewShowModal(true));
    dispatch(usersModalOperations.setNewModalType(type));
    if (type === "Followers") {
      dispatch(usersModalOperations.getFollowers(username));
      navigate("followers");
    } else if (type === "Following") {
      dispatch(usersModalOperations.getFollowing(username));
      navigate("following");
    }
  };

  useEffect(() => {
    sendUserData({ username: username }, "/api/user/get-userpage")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUserData(data);
          setUserExist(true);
        } else {
          setUserExist(false);
        }
        setIsLoading(false);
      });

    if (userData) {
      getUserPosts(userData.id)
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "allowed") setPosts(data.posts);
        });
    }
  }, [isLoading]);

  if (userData.username !== username && isLoading === false) {
    setIsLoading(true);
    setUserExist(false);
  }

  if (isLoading && !userExist) {
    return <Loader />;
  } else if (!isLoading && !userExist && !userData) {
    return <p>Yep. No user!</p>;
  }

  return (
    <UserContainer>
      <InfoWrapper>
        <ProfileIcon
          src={userData.profileImg}
          width={"150px"}
          height={"150px"}
          padding={"0 75px"}
        />
        <UserInfo>
          <Username>{userData.username}</Username>
          <AccountInfo>
            <InfoText>
              <Number>{userData.posts.length}</Number> publications
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Followers", username)}
            >
              <Number>{userData.followers.length}</Number> followers
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Following", username)}
            >
              <Number>{userData.following.length}</Number> following
            </InfoText>
          </AccountInfo>
        </UserInfo>
      </InfoWrapper>
      {userData.posts.length === 0 && <Message>There is nothing yet</Message>}
      {userData.posts.length !== 0 && <UserPosts posts={posts} />}
      {/* {!isLoading && <Outlet />} */}
      <Outlet />
    </UserContainer>
  );
};

export default User;

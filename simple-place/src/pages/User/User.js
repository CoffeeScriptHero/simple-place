import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { receiveData } from "../../services/UserService";
import { getUserPosts } from "../../services/PostsService";
import Loader from "../../components/Loader/Loader";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import {
  UserContainer,
  InfoWrapper,
  Username,
  UserInfo,
  InfoText,
  AccountInfo,
  SubscribeButton,
  Number,
} from "./User-styles";
import UserPosts from "../../components/UserPosts/UserPosts";
import { useDispatch, useSelector } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";
import { userOperations } from "../../store/user";
import { userSelectors } from "../../store/user";
import { useNavigate, Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const User = () => {
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainUser = useSelector(userSelectors.getUser());
  const username = useParams().username;

  const userModalHandler = (type) => {
    dispatch(usersModalOperations.setNewModalType(type));
    if (type === "Followers") {
      dispatch(usersModalOperations.getFollowers(username));
      navigate("followers");
    } else if (type === "Following") {
      dispatch(usersModalOperations.getFollowing(username));
      navigate("following");
    }
  };

  const followingHandler = () => {
    dispatch(userOperations.followUser(userData.id));
    userData.followers.length += 1;
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(userData.id));
    userData.followers.length -= 1;
  };

  useEffect(() => {
    receiveData({ username: username }, "/api/user/get-userpage")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUserData(data);
          setUserExist(true);
          getUserPosts(data.id)
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "allowed") {
                setPosts(data.posts);
                setPostsLoaded(true);
              }
            });
        } else {
          setPosts(null);
          setUserData(null);
          setPostsLoaded(false);
          setUserExist(false);
          navigate(`/${username}`);
        }
        setIsLoading(false);
      });
  }, [isLoading]);

  if (isLoading && !userExist) {
    return <Loader />;
  } else if (!isLoading && !userExist && !userData) {
    return <NotFound />;
  }

  if (userData.username !== username && isLoading === false) {
    setIsLoading(true);
    setUserExist(false);
    setUserData(null);
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
              <Number>{posts.length}</Number> publications
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Followers", username)}
            >
              <Number>
                {mainUser.user === username && mainUser.followers.length}
                {mainUser.user !== username && userData.followers.length}
              </Number>{" "}
              followers
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Following", username)}
            >
              <Number>
                {mainUser.user === username && mainUser.following.length}
                {mainUser.user !== username && userData.following.length}
              </Number>{" "}
              following
            </InfoText>
          </AccountInfo>
          {mainUser.user !== username &&
            !mainUser.following.includes(userData.id) && (
              <SubscribeButton onClick={followingHandler}>
                Follow
              </SubscribeButton>
            )}
          {mainUser.user !== username &&
            mainUser.following.includes(userData.id) && (
              <SubscribeButton onClick={unfollowingHandler}>
                Unfollow
              </SubscribeButton>
            )}
        </UserInfo>
      </InfoWrapper>
      <UserPosts posts={posts} postsLoaded={postsLoaded} />
      <Outlet />
    </UserContainer>
  );
};

export default User;

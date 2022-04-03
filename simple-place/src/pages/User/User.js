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
  AccountInfo,
  Number,
} from "./User-styles";
import UserPosts from "../../components/UserPosts/UserPosts";

const User = () => {
  const username = useParams().username;
  const [userExist, setUserExist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sendUserData({ username: username }, "api/user/get-userpage")
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
            <InfoText>
              <Number>{userData.subscriptions.length}</Number> subscriptions
            </InfoText>
            <InfoText>
              <Number>{userData.subscribers.length}</Number> subscribers
            </InfoText>
          </AccountInfo>
        </UserInfo>
      </InfoWrapper>
      <UserPosts posts={posts} />
    </UserContainer>
  );
};

export default User;

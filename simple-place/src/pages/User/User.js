import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendUserData } from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userpageOperations } from "../../store/userpage/index.js";
import Loader from "../../components/Loader/Loader";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import { MainContainer } from "../../App-styles";

const User = () => {
  const username = useParams().username;
  const dispatch = useDispatch();
  const [userExist, setUserExist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sendUserData({ username: username }, "api/user/get-userpage")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(
            userpageOperations.setNewUserpage({
              username: username,
              profileImg: data.profileImg,
              subscriptions: data.subscriptions,
              subscribers: data.subscribers,
              posts: data.posts,
            })
          );
          setUserExist(true);
        } else {
          setUserExist(false);
        }
        setIsLoading(false);
      });
  }, []);

  if (isLoading && userExist === null) {
    return <Loader />;
  } else if (!isLoading && !userExist) {
    return <p>Yep. No user!</p>;
  }

  return (
    <MainContainer>
      {/* {isLoading && userExist === null && <Loader />}
      {!isLoading && !userExist && <p>Yep. No user</p>}
      {userExist && username} */}
      {username}
    </MainContainer>
  );
};

export default User;

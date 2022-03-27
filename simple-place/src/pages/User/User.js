import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendUserData } from "../../services/UserService";
import Loader from "../../components/Loader/Loader";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import { MainContainer } from "../../App-styles";
import { InfoWrapper, UserInfo } from "./User-styles";

const User = () => {
  const username = useParams().username;
  const [userExist, setUserExist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

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
  }, []);

  if (isLoading && !userExist) {
    return <Loader />;
  } else if (!isLoading && !userExist && !userData) {
    return <p>Yep. No user!</p>;
  }

  return (
    <MainContainer>
      <InfoWrapper>
        <ProfileIcon
          src={userData.profileImg}
          width={"150px"}
          height={"150px"}
          padding={"0 75px"}
        />
        <UserInfo></UserInfo>
      </InfoWrapper>
    </MainContainer>
  );
};

export default User;

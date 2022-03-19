import React, { useEffect, useState } from "react";
import { RecommendedWrapper, Inscription } from "./Recommended-styles";
import { sendUserData } from "../../services/UserService.js";
import { getCookie } from "../../services/CookiesService";
import Recommendation from "../Recommendation/Recommendation";

const Recommended = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    sendUserData({ id: getCookie("id") }, "/api/user/get-all-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const usersList = users.map((u) => (
    <Recommendation
      key={u.id}
      profileImg={u.profileImg}
      username={u.username}
    />
  ));

  return (
    <RecommendedWrapper>
      <Inscription>Recommended for you</Inscription>
      {usersList}
      {usersList}
    </RecommendedWrapper>
  );
};

export default Recommended;

import React, { useEffect, useState } from "react";
import { RecommendedWrapper, Inscription } from "./Recommended-styles";
import { receiveData } from "../../services/UserService.js";
import { getCookie } from "../../services/CookiesService";
import Recommendation from "../Recommendation/Recommendation";

const Recommended = () => {
  const [users, setUsers] = useState([]);
  const emojisArray = [
    "☕",
    "🌈",
    "🤴🏻",
    "💪",
    "🐳",
    "🌸",
    "🌌",
    "🎨",
    "🏄🏻",
    "🃏",
    "🎵",
  ];

  useEffect(() => {
    receiveData({ id: getCookie("id") }, "/api/user/get-all-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const usersList = users.map((u) => (
    <Recommendation
      key={u.id}
      id={u.id}
      profileImg={u.profileImg}
      username={u.username}
    />
  ));

  return (
    <RecommendedWrapper>
      {users.length > 0 && (
        <Inscription>
          Recommended for you{" "}
          {emojisArray[Math.floor(Math.random() * emojisArray.length)]}
        </Inscription>
      )}
      {usersList}
    </RecommendedWrapper>
  );
};

export default Recommended;

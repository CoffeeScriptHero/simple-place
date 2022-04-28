import React from "react";
import { Name } from "./Username-styles";
import { userOperations } from "../../store/user";
import { useDispatch } from "react-redux";

const Username = ({ username, decoration, weight, margin, font, fontSize }) => {
  const dispatch = useDispatch();

  const usernameHandler = () => {
    dispatch(userOperations.setVisitedUser(username));
  };

  return (
    <Name
      decoration={decoration}
      weight={weight}
      margin={margin}
      font={font}
      fontSize={fontSize}
      to={`/${username}`}
      onClick={usernameHandler}
    >
      {username}
    </Name>
  );
};

export default Username;

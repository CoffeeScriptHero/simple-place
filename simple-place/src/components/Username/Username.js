import React from "react";
import { Name } from "./Username-styles";
import { useDispatch } from "react-redux";

const Username = ({ username, decoration, weight, margin, font, fontSize }) => {
  return (
    <Name
      decoration={decoration}
      weight={weight}
      margin={margin}
      font={font}
      fontSize={fontSize}
      to={`/${username}`}
    >
      {username}
    </Name>
  );
};

export default Username;

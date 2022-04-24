import React from "react";
import { Name } from "./Username-styles";

const Username = ({ username, decoration, weight, margin, font }) => {
  return (
    <Name
      decoration={decoration}
      weight={weight}
      margin={margin}
      font={font}
      to={`/${username}`}
    >
      {username}
    </Name>
  );
};

export default Username;

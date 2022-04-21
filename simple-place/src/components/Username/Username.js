import React from "react";
import { Name } from "./Username-styles";

const Username = ({ username, decoration, weight, margin, font, flex }) => {
  return (
    <Name
      decoration={decoration}
      weight={weight}
      margin={margin}
      font={font}
      to={`/${username}`}
      flex={"3"}
    >
      {username}
    </Name>
  );
};

export default Username;

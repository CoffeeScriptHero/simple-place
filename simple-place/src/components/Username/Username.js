import React from "react";
import { Name } from "./Username-styles";

const Username = ({ username, ...rest }) => {
  return (
    <Name {...rest} to={`/${username}`}>
      {username}
    </Name>
  );
};

export default Username;

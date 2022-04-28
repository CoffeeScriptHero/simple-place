import React from "react";
import { Wrapper } from "./UserWrapper-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";

const UserWrapper = ({
  profileImg,
  username,
  margin = "0 0 0 10px",
  font = "Segoe UI",
  fontSize = "16px",
  weight = "500",
  size = "34px",
}) => {
  return (
    <Wrapper>
      <ProfileIcon
        src={profileImg}
        width={size}
        height={size}
        username={username}
      />
      <Username
        username={username}
        margin={margin}
        weight={weight}
        font={font}
        fontSize={fontSize}
      />
    </Wrapper>
  );
};

export default UserWrapper;

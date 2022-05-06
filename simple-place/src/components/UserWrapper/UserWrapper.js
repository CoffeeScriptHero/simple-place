import React from "react";
import { Wrapper } from "./UserWrapper-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";

const UserWrapper = ({
  profileImg,
  username,
  margin = "0 0 0 10px",
  fontSize = "16px",
  weight = "500",
  size = "34px",
  flex = "none",
  isComment = false,
}) => {
  return (
    <Wrapper flex={flex} isComment={isComment}>
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
        fontSize={fontSize}
      />
    </Wrapper>
  );
};

export default UserWrapper;
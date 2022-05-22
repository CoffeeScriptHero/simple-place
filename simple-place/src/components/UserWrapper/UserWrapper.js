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
  isComment = false,
  ...rest
}) => {
  return (
    <Wrapper isComment={isComment} {...rest}>
      <ProfileIcon src={profileImg} width={size} height={size} />
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

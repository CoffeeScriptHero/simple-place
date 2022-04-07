import React from "react";
import { Wrapper, Avatar, UserLink } from "./ProfileIcon-styles";

const ProfileIcon = ({ src, width, height, padding, username }) => {
  return (
    <Wrapper width={width} height={height} padding={padding}>
      {username && (
        <UserLink to={`${username}`}>
          <Avatar src={src}></Avatar>
        </UserLink>
      )}
      {!username && <Avatar src={src}></Avatar>}
    </Wrapper>
  );
};

export default ProfileIcon;

import React from "react";
import { Wrapper, Avatar, UserLink } from "./ProfileIcon-styles";

const ProfileIcon = ({ src, username, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {username && (
        <UserLink to={`/${username}`}>
          <Avatar src={src}></Avatar>
        </UserLink>
      )}
      {!username && <Avatar src={src}></Avatar>}
    </Wrapper>
  );
};

export default ProfileIcon;

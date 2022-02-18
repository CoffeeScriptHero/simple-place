import React from "react";
import { Wrapper, Avatar } from "./ProfileIcon-styles";

const ProfileIcon = ({ src, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      <Avatar src={src}></Avatar>
    </Wrapper>
  );
};

export default ProfileIcon;

import React from "react";
import {
  Wrapper,
  UserWrapper,
  Username,
  SubscribeButton,
} from "./Recommendation-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const Recommendation = ({ profileImg, username }) => {
  return (
    <Wrapper>
      <UserWrapper>
        <ProfileIcon src={profileImg} width={"36px"} height={"36px"} />
        <Username>{username}</Username>
      </UserWrapper>
      <SubscribeButton>Subscribe</SubscribeButton>
    </Wrapper>
  );
};

export default Recommendation;

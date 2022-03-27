import React from "react";
import { Wrapper, UserWrapper, SubscribeButton } from "./Recommendation-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";

const Recommendation = ({ profileImg, username }) => {
  return (
    <Wrapper>
      <UserWrapper>
        <ProfileIcon
          src={profileImg}
          width={"36px"}
          height={"36px"}
          username={username}
        />
        <Username
          username={username}
          weight={"600"}
          margin={"0 0 0 10px"}
          font={"-apple-system"}
        />
      </UserWrapper>
      <SubscribeButton>Subscribe</SubscribeButton>
    </Wrapper>
  );
};

export default Recommendation;

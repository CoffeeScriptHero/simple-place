import React from "react";
import {
  Wrapper,
  UserWrapper,
  UserLink,
  Username,
  SubscribeButton,
} from "./Recommendation-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { userpageOperations } from "../../store/userpage/index.js";
import { useDispatch } from "react-redux";

const Recommendation = ({ profileImg, username }) => {
  // const dispatch = useDispatch();

  // const userpageHandler = () => {
  //   dispatch(userpageOperations.setNewUserpageName(username));
  // };

  return (
    <Wrapper>
      <UserWrapper>
        <UserLink to={`/${username}`}>
          <ProfileIcon src={profileImg} width={"36px"} height={"36px"} />
        </UserLink>
        <UserLink to={`/${username}`}>
          <Username>{username}</Username>
        </UserLink>
      </UserWrapper>
      <SubscribeButton>Subscribe</SubscribeButton>
    </Wrapper>
  );
};

export default Recommendation;

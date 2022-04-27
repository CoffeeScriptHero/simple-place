import React from "react";
import { Wrapper, UserWrapper, SubscribeButton } from "./Recommendation-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";
import { userOperations } from "../../store/user";
import { userSelectors } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";

const Recommendation = ({ id, profileImg, username }) => {
  const following = useSelector(userSelectors.getUser()).following;
  const dispatch = useDispatch();

  const followingHandler = () => {
    dispatch(userOperations.followUser(id));
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(id));
  };

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
          font={"Segoe UI"}
        />
      </UserWrapper>
      {!following.includes(id) && (
        <SubscribeButton onClick={followingHandler}>Follow</SubscribeButton>
      )}
      {following.includes(id) && (
        <SubscribeButton onClick={unfollowingHandler}>Unfollow</SubscribeButton>
      )}
    </Wrapper>
  );
};

export default Recommendation;

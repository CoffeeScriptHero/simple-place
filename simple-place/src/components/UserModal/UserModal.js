import React from "react";
import { UserWrapper, Button } from "./UserModal-styles";
import Username from "../Username/Username";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const UserModal = ({ username, img }) => {
  return (
    <UserWrapper>
      <ProfileIcon
        width={"30px"}
        height={"30px"}
        padding={"0 10px 0 0"}
        src={img}
        username={username}
      />
      <Username flex username={username} />
      <Button>Follow</Button>
    </UserWrapper>
  );
};

export default UserModal;

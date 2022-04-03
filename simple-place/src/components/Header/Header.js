import React from "react";
import { HeaderWrapper, Nav, IconsWrapper } from "./Header-styles";
import { Logo } from "../../App-styles";
import { MainContainer } from "../../App-styles";
import Icon from "../Icon/Icon";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { userSelectors } from "../../store/user/index.js";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector(userSelectors.getUserInfo()).user;
  const img = useSelector(userSelectors.getUserInfo()).profileImg;

  if (!username) return null;

  return (
    <HeaderWrapper>
      <MainContainer>
        <Nav>
          <Logo>SimplePlace</Logo>
          <IconsWrapper>
            <Icon path="/" type="home" />
            <Icon path="/messages" type="messages" />
            <Icon path="/add-post" type="add" />
            <ProfileIcon username={username} src={img} />
          </IconsWrapper>
        </Nav>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default Header;

import React from "react";
import {
  HeaderWrapper,
  Nav,
  LogoWrapper,
  Logo,
  IconsWrapper,
  ProfileIcon,
  IconLink,
} from "./Header-styles";
import { MainContainer } from "../../App-styles";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <HeaderWrapper>
      <MainContainer>
        <Nav>
          <LogoWrapper>
            <Logo>SimplePlace</Logo>
          </LogoWrapper>
          <IconsWrapper>
            <IconLink to="/">
              <Icon type="home" />
            </IconLink>
            <IconLink to="/messages">
              <Icon type="messages" />
            </IconLink>
            <IconLink to="/add-post">
              <Icon type="add" />
            </IconLink>
            <IconLink to="/profile">
              <ProfileIcon
                src={
                  "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
                }
              ></ProfileIcon>
            </IconLink>
          </IconsWrapper>
        </Nav>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default Header;

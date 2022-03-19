import React from "react";
import { HeaderWrapper, Nav, IconsWrapper, IconLink } from "./Header-styles";
import { Logo } from "../../App-styles";
import { MainContainer } from "../../App-styles";
import Icon from "../Icon/Icon";
import { connect } from "react-redux";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const Header = ({ user, profileImg }) => {
  if (!user) return null;
  return (
    <HeaderWrapper>
      <MainContainer>
        <Nav>
          <Logo>SimplePlace</Logo>
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
              <ProfileIcon src={profileImg} />
            </IconLink>
          </IconsWrapper>
        </Nav>
      </MainContainer>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    profileImg: state.user.profileImg,
  };
};

export default connect(mapStateToProps)(Header);

import React from "react";
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  LogoPart,
  NavBar,
  IconsList,
  IconItem,
} from "./Header-styles";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoWrapper>
          <LogoPart>Simple</LogoPart>
          <LogoPart>Place</LogoPart>
        </LogoWrapper>
        <NavBar>
          <IconsList>
            <IconItem>
              <Icon type="home" />
            </IconItem>
            <IconItem>
              <Icon type="messages" />
            </IconItem>
            <IconItem>
              <Icon type="add" />
            </IconItem>
          </IconsList>
        </NavBar>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;

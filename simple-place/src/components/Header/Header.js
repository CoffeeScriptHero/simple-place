import React, { useState } from "react";
import { HeaderWrapper, Nav, IconsWrapper } from "./Header-styles";
import { Logo } from "../../App-styles";
import { MainContainer } from "../../App-styles";
import Icon from "../Icon/Icon";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { userSelectors } from "../../store/user/index.js";
import { useSelector } from "react-redux";
import AddPostModal from "../AddPostModal/AddPostModal";

const Header = () => {
  const username = useSelector(userSelectors.getUser()).user;
  const img = useSelector(userSelectors.getUser()).profileImg;
  const [showModal, setShowModal] = useState(false);

  if (!username) return null;

  return (
    <HeaderWrapper>
      <MainContainer>
        <Nav>
          <Logo>SimplePlace</Logo>
          <IconsWrapper>
            <Icon path="/" type="home" />
            <Icon pointer type="add" onClick={() => setShowModal(!showModal)} />
            <ProfileIcon username={username} src={img} />
          </IconsWrapper>
        </Nav>
      </MainContainer>
      {showModal && <AddPostModal setShowModal={setShowModal} />}
    </HeaderWrapper>
  );
};

export default Header;

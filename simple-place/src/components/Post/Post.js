import React from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
  Username,
  IconsWrapper,
  LikesNumber,
  LikesText,
  Description,
} from "./Post-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Icon from "../Icon/Icon";

const Post = () => {
  return (
    <Article>
      <Header>
        <ProfileIcon
          src={
            "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
          }
          width={"34px"}
          height={"34px"}
        />
        <Username to={`/denya`}>denya_aquapark</Username>
      </Header>
      <Main>
        <Image src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          {/* вынести в глобальные стили */}
          <Icon margin={"0 10px 0 0"} type="like" />
          <Icon type="comment" />
        </IconsWrapper>
        <LikesText>
          <LikesNumber>10</LikesNumber> liked
        </LikesText>
        <Description>
          <Username
            margin={"0 10px 0 0 "}
            weight={"700"}
            to={"/denis"}
            decoration={"underline"}
          >
            denya_aquapark
          </Username>
          Hello there
        </Description>
      </Footer>
    </Article>
  );
};

export default Post;

import React from "react";
import { Section } from "./Posts-styles";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <Section>
      <Post
        avatar={
          "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
        }
        username={"denya_aquapark"}
        img={
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
        }
        likes={54}
        desc={
          "Hello there guys i am just testing this thing. yoofsdfdsfdsfdfsdfds"
        }
      />
    </Section>
  );
};

export default Posts;

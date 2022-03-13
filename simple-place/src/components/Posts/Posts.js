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
          "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/msyJ2kVdCzoy6ChWjSE6b0D5.jpg"
        }
        likes={54}
        desc={"High quality-big Heralt! SO0--llclxllcxlclxlcxlclxcl"}
        comments={[
          { ph_aquapark: "nice post" },
          { ph_aquapark: "nice post" },
          { ph_aquapark: "nice post" },
        ]}
      />

      <Post
        avatar={
          "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/59846/176287/0044181001582748537.jpg"
        }
        username={"lol"}
        img={
          "https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg"
        }
        likes={42343}
        desc={"wtf"}
        comments={[]}
      />
    </Section>
  );
};

export default Posts;

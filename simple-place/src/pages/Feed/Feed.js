import { Main, FeedContainer } from "./Feed-styles";
import Posts from "../../components/Posts/Posts";
import SideContent from "../../components/SideContent/SideContent";

const Feed = () => {
  return (
    <Main>
      <FeedContainer>
        <Posts />
        <SideContent />
      </FeedContainer>
    </Main>
  );
};

export default Feed;

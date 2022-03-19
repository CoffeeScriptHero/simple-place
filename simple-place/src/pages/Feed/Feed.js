import { connect } from "react-redux";
import UsersThoughts from "../../components/UsersThoughts/UsersThoughts";
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Feed);

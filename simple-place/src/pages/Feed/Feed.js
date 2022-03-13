import { connect } from "react-redux";
import UsersThoughts from "../../components/UsersThoughts/UsersThoughts";
import { Main } from "./Feed-styles";
import { MainContainer } from "../../App-styles";
import Posts from "../../components/Posts/Posts";

const Feed = () => {
  return (
    <Main>
      <MainContainer>
        {/* <UsersThoughts /> */}
        <Posts />
      </MainContainer>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Feed);

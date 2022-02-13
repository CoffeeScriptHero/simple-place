import { connect } from "react-redux";
import UsersThoughts from "../../components/UsersThoughts/UsersThoughts";
import { Main } from "./Feed-styles";

const Feed = () => {
  return (
    <Main>
      <UsersThoughts />
    </Main>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Feed);

import { connect } from "react-redux";
import UsersThoughts from "../../components/UsersThoughts/UsersThoughts";

const Feed = () => {
  return <UsersThoughts />;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Feed);

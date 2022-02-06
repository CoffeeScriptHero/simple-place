import { connect } from "react-redux";

const Feed = ({ user }) => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Feed);

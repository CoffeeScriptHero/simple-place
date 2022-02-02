import { useEffect } from "react";
import { connect } from "react-redux";
import { userOperations } from "../../store/user";
import { getCookie } from "../../services/CookiesService.js";
import { checkCookiesData } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const Feed = ({ user, setNewUser }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setNewUser({ user: getCookie("user"), id: getCookie("id") });
  // });

  return <div>Hello, {user}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewUser: (userInfo) => dispatch(userOperations.setNewUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { checkCookiesData } from "../services/UserService.js";
import { getCookie } from "../services/CookiesService.js";
import { connect } from "react-redux";
import { userOperations } from "../store/user/index.js";

const AppRoutes = ({ user, setNewUser }) => {
  const checkUserLogged = async () => {
    const isLogged = await checkCookiesData();
    if (isLogged) {
      setNewUser({ user: getCookie("username"), id: getCookie("id") });
    } else {
      setNewUser({ user: false, id: false });
    }
  };

  if (getCookie("id") && user !== false) checkUserLogged();

  return (
    <Routes>
      <Route exact path="/" element={user ? <Feed /> : <SignUp />} />
    </Routes>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewUser: (userInfo) => dispatch(userOperations.setNewUser(userInfo)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);

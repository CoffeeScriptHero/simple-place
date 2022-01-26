import { React, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { userOperations } from "../store/user";
import { getCookie } from "../services/CookiesService.js";
import { checkUserLogged } from "../services/UserService.js";

const AppRoutes = ({ username, setNewUser }) => {
  useEffect(() => {
    if (checkUserLogged()) {
      setNewUser({ username: getCookie("username"), id: getCookie("id") });
      console.log("set user");
    } else {
      console.log("not logged in");
    }
  });

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={username ? "/feed" : "/signup"} />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewUser: (userInfo) => dispatch(userOperations.setNewUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);

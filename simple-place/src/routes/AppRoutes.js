import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../services/UserService.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../pages/User/User.js";
import UsersModal from "../components/UsersModal/UsersModal.js";
import PostModal from "../components/PostModal/PostModal.js";
import NotFound from "../pages/NotFound/NotFound.js";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelectors.getUser()).user;

  useEffect(() => {
    setUserData(dispatch, navigate);
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Feed /> : <SignUp />}>
        <Route path="p/:id" element={<PostModal />} />
      </Route>
      <Route path=":username" element={<User />}>
        <Route path="followers" element={<UsersModal />} />
        <Route path="following" element={<UsersModal />} />
        <Route path="p/:id" element={<PostModal />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

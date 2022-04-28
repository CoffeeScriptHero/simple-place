import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../services/UserService.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../pages/User/User.js";
import UsersModal from "../components/UsersModal/UsersModal.js";
import PostModal from "../components/PostModal/PostModal.js";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelectors.getUser()).user;

  useEffect(() => {
    setUserData(dispatch, navigate, user);
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Feed /> : <SignUp />} />
      <Route path=":username" element={<User />}>
        <Route path="followers" element={<UsersModal />} />
        <Route path="following" element={<UsersModal />} />
        <Route path="p/:id" element={<PostModal />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

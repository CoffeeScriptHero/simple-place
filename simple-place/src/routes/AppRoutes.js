import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { checkCookiesData } from "../services/UserService.js";
import { getCookie } from "../services/CookiesService.js";
import { userOperations, userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../services/UserService.js";
import { useEffect } from "react";
import User from "../pages/User/User.js";
import UsersModal from "../components/UsersModal/UsersModal.js";
import PostModal from "../components/PostModal/PostModal.js";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser()).user;

  useEffect(async () => {
    if (getCookie("id") && user !== false) {
      const isLogged = await checkCookiesData();

      if (isLogged) {
        sendUserData({ id: getCookie("id") }, "/api/user/get-user-data")
          .then((res) => res.json())
          .then((res) => {
            dispatch(
              userOperations.setNewUser({
                user: getCookie("username"),
                id: getCookie("id"),
                profileImg: res.profileImg,
                following: res.following,
                followers: res.followers,
                posts: res.posts,
              })
            );
          });
      } else {
        dispatch(userOperations.setNewUser({ user: false, id: false }));
      }
    }
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

import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { checkCookiesData } from "../services/UserService.js";
import { getCookie } from "../services/CookiesService.js";
import { userOperations, userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../services/UserService.js";
import { useEffect } from "react";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUserInfo()).user;

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
                subscriptions: res.subscriptions,
                subscribers: res.subscribers,
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
      <Route exact path="/" element={user ? <Feed /> : <SignUp />} />
    </Routes>
  );
};

export default AppRoutes;

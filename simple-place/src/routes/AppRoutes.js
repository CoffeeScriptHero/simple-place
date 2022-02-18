import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { checkCookiesData } from "../services/UserService.js";
import { getCookie } from "../services/CookiesService.js";
import { userOperations, userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser());

  const checkUserLogged = async () => {
    const isLogged = await checkCookiesData();
    if (isLogged) {
      dispatch(
        userOperations.setNewUser({
          user: getCookie("username"),
          id: getCookie("id"),
        })
      );
    } else {
      dispatch(userOperations.setNewUser({ user: false, id: false }));
    }
  };

  if (getCookie("id") && user !== false) checkUserLogged();

  return (
    <Routes>
      <Route exact path="/" element={user ? <Feed /> : <SignUp />} />
    </Routes>
  );
};

export default AppRoutes;

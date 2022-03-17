import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { checkCookiesData } from "../services/UserService.js";
import { getCookie } from "../services/CookiesService.js";
import { userOperations, userSelectors } from "../store/user/index.js";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../services/UserService.js";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser());

  // const data = {
  //   id: "3",
  //   description: "Люблю Денчика",
  //   userId: "5f536d10-a537-11ec-a6c0-398f5f0b5346",
  //   comments: [{ ph_aquapark: "hello" }, { dsd: "helsalo" }],
  //   likes: 10402,
  //   image:
  //     "https://res.cloudinary.com/drrhht2jy/image/upload/v1635592811/samples/cloudinary-group.jpg",
  // };

  const checkUserLogged = async () => {
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
  };

  if (getCookie("id") && user !== false) checkUserLogged();

  return (
    <Routes>
      <Route exact path="/" element={user ? <Feed /> : <SignUp />} />
    </Routes>
  );
};

export default AppRoutes;

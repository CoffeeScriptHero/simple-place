import { getCookie } from "./CookiesService";
import { userOperations } from "../store/user";

export const receiveData = async (data, request) => {
  const response = await fetch(request, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};

export const checkUserLogged = async () => {
  const id = getCookie("id");
  let isLogged = false;
  if (id) {
    await receiveData({ id }, "/api/user/check-user")
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "allowed") isLogged = true;
      });
  }
  return isLogged;
};

export const setUserData = async (dispatch, navigate, user) => {
  if (getCookie("id") && user !== false) {
    const isLogged = await checkUserLogged();

    if (isLogged) {
      receiveData({ id: getCookie("id") }, "/api/user/get-user-data")
        .then((res) => res.json())
        .then((res) => {
          dispatch(
            userOperations.setNewUser({
              user: getCookie("username"),
              id: getCookie("id"),
              profileImg: res.profileImg,
              visitedUser: null,
              following: res.following,
              followers: res.followers,
              posts: res.posts,
            })
          );
        });
    } else {
      navigate("/");
      dispatch(userOperations.setNewUser({ user: false, id: false }));
    }
  }
};

// export const someFunc = async (data) => {
//   const response = await fetch("/api/post/add-post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ data }),
//   });
//   return response;
// };

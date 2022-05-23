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

export const setUserData = async (dispatch) => {
  receiveData({ id: getCookie("id") }, "/api/user/get-user-data")
    .then((res) => res.json())
    .then((res) => {
      dispatch(
        userOperations.setNewUser({
          user: getCookie("username"),
          id: getCookie("id"),
          profileImg: res.profileImg,
          pageNotFound: false,
          following: res.following,
          followers: res.followers,
          posts: res.posts,
        })
      );
    });
};

export const checkUserLogged = async () => {
  const id = getCookie("id");
  let isLogged = false;

  if (id) {
    await receiveData({ id }, "/api/user/check-main-user")
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "allowed") isLogged = true;
      });
  }

  return isLogged;
};

export const changeUsername = async (data) => {
  const response = await fetch("/api/user/change-username", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};

// export const checkUserExist = async (username) => {
//   const res = await fetch("/api/user/check-user-exist", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username: username }),
//   });

//   console.log(res);
// };

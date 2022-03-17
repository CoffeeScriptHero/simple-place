import { getCookie } from "./CookiesService";

export const sendUserData = async (data, request) => {
  const response = await fetch(request, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};

export const checkCookiesData = async () => {
  const id = getCookie("id");
  let isLogged = false;
  if (id) {
    const response = await sendUserData({ id }, "/api/user/check-user")
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "allowed") isLogged = true;
      });
  }
  return isLogged;
};

// export const someFunc = async (data) => {
//   const response = await fetch("/api/post/add-post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ data }),
//   });
//   return response;
// };

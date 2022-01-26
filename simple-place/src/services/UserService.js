import { getCookie } from "./CookiesService";

export const sendUserData = async (data, request) => {
  const response = await fetch(request, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};

export const checkUserLogged = async () => {
  const username = getCookie("username");
  const id = getCookie("id");
  if (username && id) {
    const response = await sendUserData({ username, id }, "/api/check-user")
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "allowed") return { username, id };
      });
  }
  return false;
};

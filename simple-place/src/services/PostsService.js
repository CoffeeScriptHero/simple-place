export const getAllPosts = async () => {
  const response = await fetch("/api/post/get-all-posts");
  return response;
};

export const getUserPosts = async (id) => {
  const response = await fetch("/api/post/get-user-posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return response;
};

export const getPost = async (id) => {
  const response = await fetch("/api/post/get-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });
  return response;
};

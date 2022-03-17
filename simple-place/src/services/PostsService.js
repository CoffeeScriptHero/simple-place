export const getAllPosts = async () => {
  const response = await fetch("/api/post/get-all-posts");
  return response;
};

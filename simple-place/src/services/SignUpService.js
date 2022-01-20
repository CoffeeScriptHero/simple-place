export const sendUserData = async (data) => {
  const response = await fetch(`/api/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};

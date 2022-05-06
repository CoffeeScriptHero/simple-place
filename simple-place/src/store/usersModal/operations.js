import actions from "./actions";

const getFollowers = (username) => async (dispatch, getState) => {
  fetch("/api/user/get-followers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.followers));
    });
};

const getFollowing = (username) => async (dispatch, getState) => {
  fetch("/api/user/get-following", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.following));
    });
};

const getLiked = (users) => async (dispatch, getState) => {
  fetch("/api/user/get-liked", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ users }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.users));
    });
};

const deleteUser = (username) => (dispatch, getState) => {
  const updatedUsers = getState().usersModal.users.filter(
    (u) => u.username !== username
  );
  getState().usersModal.users = updatedUsers;
  dispatch(actions.setUsers(updatedUsers));
};

const setNewModalType = (type) => (dispatch, getState) => {
  dispatch(actions.setModalType(type));
};

const operationsObj = {
  setNewModalType,
  getFollowers,
  getFollowing,
  getLiked,
  deleteUser,
};

export default operationsObj;

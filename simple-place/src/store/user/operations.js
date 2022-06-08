import actions from "./actions";

const setNewUser = (userInfo) => (dispatch, getState) => {
  dispatch(actions.saveUser(userInfo));
};

const clearPost = () => (dispatch, getState) => {
  dispatch(actions.clearPost());
};

const followUser = (id) => async (dispatch, getState) => {
  fetch("/api/main_user/follow-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: id, mainId: getState().user.id }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "allowed") {
        getState().user.following.push(id);
        dispatch(actions.updateModal());
      }
    });
};

const unfollowUser = (id) => async (dispatch, getState) => {
  fetch("/api/main_user/unfollow-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: id, mainId: getState().user.id }),
  }).then(() => {
    getState().user.following = getState().user.following.filter(
      (i) => i !== id
    );
    dispatch(actions.updateModal());
  });
};

const deleteUser = (id) => async (dispatch, getState) => {
  fetch("/api/main_user/delete-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: id, mainId: getState().user.id }),
  }).then(() => {
    getState().user.followers = getState().user.followers.filter(
      (i) => i !== id
    );
    dispatch(actions.updateModal());
  });
};

const addPost = (post) => (dispatch, getState) => {
  dispatch(actions.addPost(post));
};

const updateUsername = (username) => (dispatch, getState) => {
  dispatch(actions.updateUsername(username));
};

const updateProfilePic = (profilePic) => (dispatch, getState) => {
  dispatch(actions.updateProfilePic(profilePic));
};

const operationsObj = {
  setNewUser,
  clearPost,
  followUser,
  unfollowUser,
  deleteUser,
  addPost,
  updateUsername,
  updateProfilePic,
};

export default operationsObj;

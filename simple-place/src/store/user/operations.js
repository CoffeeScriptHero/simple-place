import actions from "./actions";

const setNewUser = (userInfo) => (dispatch, getState) => {
  dispatch(actions.saveUser(userInfo));
};

const setNotFound = (isNotFound) => (dispatch, getState) => {
  dispatch(actions.setNotFound(isNotFound));
};

const setUserLogged = (isLogged) => (dispatch, getState) => {
  dispatch(actions.setLogged(isLogged));
};

const followUser = (id) => async (dispatch, getState) => {
  fetch("/api/user/follow-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: id, mainId: getState().user.id }),
  }).then(() => {
    getState().user.following.push(id);
    dispatch(actions.updateModal());
  });
};

const unfollowUser = (id) => async (dispatch, getState) => {
  fetch("/api/user/unfollow-user", {
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
  fetch("/api/user/delete-user", {
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

const operationsObj = {
  setNewUser,
  setNotFound,
  setUserLogged,
  followUser,
  unfollowUser,
  deleteUser,
};

export default operationsObj;

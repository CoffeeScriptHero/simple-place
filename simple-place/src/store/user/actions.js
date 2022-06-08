import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const clearPost = () => ({
  type: types.CLEAR_POST,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

const updateUsername = (username) => ({
  type: types.UPDATE_USERNAME,
  payload: username,
});

const updateProfilePic = (profilePic) => ({
  type: types.UPDATE_PROFILE_PIC,
  payload: profilePic,
});

const actionsObj = {
  saveUser,
  setLogged,
  clearPost,
  updateModal,
  addPost,
  updateUsername,
  updateProfilePic,
};

export default actionsObj;

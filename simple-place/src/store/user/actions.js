import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

const actionsObj = {
  saveUser,
  setLogged,
  updateModal,
  addPost,
};

export default actionsObj;

import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const logOut = () => ({
  type: types.LOG_OUT,
});

const setNotFound = (isNotFound) => ({
  type: types.SET_NOT_FOUND,
  payload: isNotFound,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const actionsObj = {
  saveUser,
  setLogged,
  logOut,
  updateModal,
  setNotFound,
};

export default actionsObj;

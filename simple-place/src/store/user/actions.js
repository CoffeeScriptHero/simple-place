import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setNotFound = (isNotFound) => ({
  type: types.SET_NOT_FOUND,
  payload: isNotFound,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const actionsObj = {
  saveUser,
  setLogged,
  updateModal,
  setNotFound,
};

export default actionsObj;

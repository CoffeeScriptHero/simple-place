import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const setVisitedUser = (username) => ({
  type: types.SET_VISITED_USER,
  payload: username,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const actionsObj = {
  saveUser,
  setLogged,
  updateModal,
  setVisitedUser,
};

export default actionsObj;

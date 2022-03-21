import types from "./types";

const setUserpage = (user) => ({
  type: types.SET_USERPAGE,
  payload: user,
});

const setUserpageName = (username) => ({
  type: types.SET_USERPAGE_NAME,
  payload: username,
});

const actionsObj = { setUserpage, setUserpageName };

export default actionsObj;

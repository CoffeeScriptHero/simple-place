import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const actionsObj = { saveUser };

export default actionsObj;

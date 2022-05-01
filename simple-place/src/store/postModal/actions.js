import types from "./types";

const setPostInfo = (postInfo) => ({
  type: types.SET_POST_INFO,
  payload: postInfo,
});

const clearPostInfo = () => ({
  type: types.CLEAR_POST_INFO,
});

const actionsObj = { setPostInfo, clearPostInfo };

export default actionsObj;

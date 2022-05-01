import actions from "./actions";

const setPostInfo = (postInfo) => (dispatch, getState) => {
  dispatch(actions.setPostInfo(postInfo));
};

const clearPostInfo = () => (dispatch, getState) => {
  dispatch(actions.clearPostInfo());
};

const operationsObj = { setPostInfo, clearPostInfo };

export default operationsObj;

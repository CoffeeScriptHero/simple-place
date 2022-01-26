import actions from "./actions";

const setNewUser = (userInfo) => (dispatch, getState) => {
  dispatch(actions.saveUser(userInfo));
};

const operationsObj = { setNewUser };

export default operationsObj;

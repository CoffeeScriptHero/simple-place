import actions from "./actions";

const setNewUserpage = (user) => (dispatch, getState) => {
  dispatch(actions.setUserpage(user));
};

const setNewUserpageName = (username) => (dispatch, getState) => {
  dispatch(actions.setUserpageName(username));
};

const operationsObj = { setNewUserpage, setNewUserpageName };

export default operationsObj;

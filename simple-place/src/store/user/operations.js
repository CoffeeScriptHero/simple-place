import actions from "./actions";

const setNewUser = (userInfo) => (dispatch, getState) => {
  dispatch(actions.saveUser(userInfo));
};

const setUserLogged = (isLogged) => (dispatch, getState) => {
  dispatch(actions.setLogged(isLogged));
};

const operationsObj = { setNewUser, setUserLogged };

export default operationsObj;

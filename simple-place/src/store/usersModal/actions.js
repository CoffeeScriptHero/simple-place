import types from "./types";

const setShowModal = (isShowModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: isShowModal,
});

const setModalType = (type) => ({
  type: types.SET_MODAL_TYPE,
  payload: type,
});

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const actionsObj = { setShowModal, setModalType, getUsers };

export default actionsObj;

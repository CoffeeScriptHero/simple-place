import types from "./types";

const setShowModal = (isShowModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: isShowModal,
});

const setModalType = (type) => ({
  type: types.SET_MODAL_TYPE,
  payload: type,
});

const setUsers = (users) => ({
  type: types.SET_USERS,
  payload: users,
});

const actionsObj = { setShowModal, setModalType, setUsers };

export default actionsObj;

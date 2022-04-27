import types from "./types";

const setShowModal = (isShowModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: isShowModal,
});

const actionsObj = { setShowModal };

export default actionsObj;

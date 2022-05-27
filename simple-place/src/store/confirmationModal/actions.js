import types from "./types";

const setShowModal = (showModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: showModal,
});

const customizeModal = (modalSettings) => ({
  type: types.CUSTOMIZE_MODAL,
  payload: modalSettings,
});

const clearModal = () => ({
  type: types.CLEAR_MODAL,
});

const actionsObj = { setShowModal, customizeModal, clearModal };

export default actionsObj;

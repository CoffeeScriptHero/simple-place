import actions from "./actions";

const setShowModal = (showModal) => (dispatch, getState) => {
  dispatch(actions.setShowModal(showModal));
};

const customizeModal = (modalSettings) => (dispatch, getState) => {
  dispatch(actions.customizeModal(modalSettings));
};

const clearModal = () => (dispatch, getState) => {
  dispatch(actions.clearModal());
};

const operationsObj = { setShowModal, customizeModal, clearModal };

export default operationsObj;

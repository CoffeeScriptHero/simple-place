import actions from "./actions";

const setNewShowModal = (isShowModal) => (dispatch, getState) => {
  dispatch(actions.setShowModal(isShowModal));
};

const operationsObj = { setNewShowModal };

export default operationsObj;

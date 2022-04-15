import types from "./types";

const setShowModal = (isShowModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: isShowModal,
});

const setModalType = (type) => ({
  type: types.SET_MODAL_TYPE,
  payload: type,
});

const getFollowers = (followers) => ({
  type: types.GET_FOLLOWERS,
  payload: followers,
});

const getFollowing = (following) => ({
  type: types.GET_FOLLOWING,
  payload: following,
});

const actionsObj = { setShowModal, setModalType, getFollowers, getFollowing };

export default actionsObj;

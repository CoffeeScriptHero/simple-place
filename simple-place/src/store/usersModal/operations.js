import actions from "./actions";

const setNewShowModal = (isShowModal) => (dispatch, getState) => {
  dispatch(actions.setShowModal(isShowModal));
};

const getFollowers = (username) => async (dispatch, getState) => {
  fetch("/api/user/get-followers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.getUsers(data.followers));
    });
};

const getFollowing = (username) => async (dispatch, getState) => {
  fetch("/api/user/get-following", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.getUsers(data.following));
    });
};

const setNewModalType = (type) => (dispatch, getState) => {
  dispatch(actions.setModalType(type));
};

const operationsObj = {
  setNewShowModal,
  setNewModalType,
  getFollowers,
  getFollowing,
};

export default operationsObj;

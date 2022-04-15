const getShowModal = () => (state) => {
  return state.usersModal.showModal;
};

const getFollowers = () => (state) => {
  return state.usersModal.followers;
};

const getFollowing = () => (state) => {
  return state.usersModal.following;
};

const getModalType = () => (state) => {
  return state.usersModal.modalType;
};

export default {
  getShowModal,
  getFollowers,
  getFollowing,
  getModalType,
};

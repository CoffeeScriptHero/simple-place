const getShowModal = () => (state) => {
  return state.usersModal.showModal;
};

const getUsers = () => (state) => {
  return state.usersModal.users;
};

const getModalType = () => (state) => {
  return state.usersModal.modalType;
};

export default {
  getShowModal,
  getUsers,
  getModalType,
};

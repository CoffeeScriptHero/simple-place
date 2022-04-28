import types from "./types";

const initialState = {
  showModal: true,
  modalType: null,
  users: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        users: null,
        showModal: action.payload,
        modalType: null,
      };
    }
    case types.SET_MODAL_TYPE: {
      return {
        ...state,
        modalType: action.payload,
      };
    }
    case types.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

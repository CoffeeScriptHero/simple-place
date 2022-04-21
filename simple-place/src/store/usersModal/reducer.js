import types from "./types";

const initialState = {
  showModal: false,
  modalType: null,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        users: [],
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
    case types.GET_USERS: {
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

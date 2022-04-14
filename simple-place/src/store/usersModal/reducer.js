import types from "./types";

const initialState = {
  showModal: false,
  modalType: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    case types.SET_MODAL_TYPE: {
      return {
        ...state,
        modalType: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

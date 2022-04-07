import types from "./types";

const initialState = {
  showModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

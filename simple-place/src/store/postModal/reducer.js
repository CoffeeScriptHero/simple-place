import types from "./types";

const initialState = {
  showModal: true,
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

    default:
      return state;
  }
};

export default reducer;

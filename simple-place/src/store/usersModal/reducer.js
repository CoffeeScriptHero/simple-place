import types from "./types";

const initialState = {
  showModal: false,
  modalType: null,
  followers: [],
  following: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        ...state,
        followers: [],
        following: [],
        showModal: action.payload,
      };
    }
    case types.SET_MODAL_TYPE: {
      return {
        ...state,
        modalType: action.payload,
      };
    }
    case types.GET_FOLLOWERS: {
      return {
        ...state,
        followers: action.payload,
      };
    }
    case types.GET_FOLLOWING: {
      return {
        ...state,
        following: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

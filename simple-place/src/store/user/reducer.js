import types from "./types";

const initialState = {
  user: null,
  id: null,
  profileImg: null,
  pageNotFound: false,
  following: [],
  followers: [],
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER: {
      return {
        ...action.payload,
      };
    }
    case types.SET_NOT_FOUND: {
      return {
        ...state,
        pageNotFound: action.payload,
      };
    }
    case types.UPDATE_MODAL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;

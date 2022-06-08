import types from "./types";

const initialState = {
  user: null,
  id: null,
  profileImg: null,
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
    case types.UPDATE_MODAL: {
      return {
        ...state,
      };
    }
    case types.ADD_POST: {
      return {
        ...state,
        posts: [action.payload],
      };
    }
    case types.CLEAR_POST: {
      return {
        ...state,
        posts: [],
      };
    }
    case types.UPDATE_USERNAME: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.UPDATE_PROFILE_PIC: {
      return {
        ...state,
        profileImg: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

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
        posts: state.posts.push(action.payload),
      };
    }
    case types.UPDATE_USERNAME: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

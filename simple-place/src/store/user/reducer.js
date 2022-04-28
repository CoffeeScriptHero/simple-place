import types from "./types";

const initialState = {
  user: null,
  id: null,
  visitedUser: null,
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
    case types.SET_VISITED_USER: {
      return {
        ...state,
        visitedUser: action.payload,
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

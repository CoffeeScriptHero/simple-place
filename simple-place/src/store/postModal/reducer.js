import types from "./types";

const initialState = {
  username: null,
  profileImg: null,
  image: null,
  likes: null,
  userId: null,
  postId: null,
  comments: null,
  description: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POST_INFO: {
      return {
        ...action.payload,
      };
    }
    case types.CLEAR_POST_INFO: {
      return {
        username: null,
        profileImg: null,
        image: null,
        likes: null,
        userId: null,
        postId: null,
        comments: [],
        description: null,
      };
    }
    case types.UPDATE_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

import types from "./types";

const initialState = {
  username: null,
  profileImg: null,
  following: [],
  followers: [],
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERPAGE: {
      return {
        username: action.payload.username,
        profileImg: action.payload.profileImg,
        following: action.payload.following,
        followers: action.payload.followers,
        posts: action.payload.posts,
      };
      // return Object.assign(state, action.payload);
    }
    case types.SET_USERPAGE_NAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

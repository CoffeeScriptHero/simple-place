import types from "./types";

const initialState = {
  username: null,
  profileImg: null,
  subscriptions: [],
  subscribers: [],
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERPAGE: {
      return {
        username: action.payload.username,
        profileImg: action.payload.profileImg,
        subscriptions: action.payload.subscriptions,
        subscribers: action.payload.subscribers,
        posts: action.payload.posts,
      };
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

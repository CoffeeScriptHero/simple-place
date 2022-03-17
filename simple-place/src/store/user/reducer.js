import types from "./types";

const initialState = {
  user: null,
  id: null,
  profileImg: null,
  subscriptions: [],
  subscribers: [],
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER: {
      return {
        user: action.payload.user,
        id: action.payload.id,
        profileImg: action.payload.profileImg,
        subscriptions: action.payload.subscriptions,
        subscribers: action.payload.subscribers,
        posts: action.payload.posts,
      };
    }
    default:
      return state;
  }
};

export default reducer;

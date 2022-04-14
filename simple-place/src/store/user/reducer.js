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
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

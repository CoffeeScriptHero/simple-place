import types from "./types";

const initialState = {
  user: null,
  id: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER: {
      return {
        user: action.payload.username,
        id: action.payload.id,
      };
    }
    default:
      return state;
  }
};

export default reducer;

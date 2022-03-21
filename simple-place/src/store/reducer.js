import { combineReducers } from "redux";
import user from "./user";
import userpage from "./userpage";

const reducer = combineReducers({ user, userpage });

export default reducer;

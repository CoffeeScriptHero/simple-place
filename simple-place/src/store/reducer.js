import { combineReducers } from "redux";
import user from "./user";
import userpage from "./userpage";
import usersModal from "./usersModal";

const reducer = combineReducers({ user, usersModal });

export default reducer;

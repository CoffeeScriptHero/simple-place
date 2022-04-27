import { combineReducers } from "redux";
import user from "./user";
import usersModal from "./usersModal";
import postModal from "./postModal";

const reducer = combineReducers({ user, usersModal, postModal });

export default reducer;

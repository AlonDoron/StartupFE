// export { default as authReducer } from "./authReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({ authReducer });

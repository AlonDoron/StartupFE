import { createStore } from "redux";
import combineReducers from "../reducers";

const rootReducer = combineReducers;

const configureStore = () => createStore(rootReducer);

export default configureStore;

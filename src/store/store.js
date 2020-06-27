import { createStore, combineReducers } from "redux";
import {} from "./reducers";

const rootReducer = combineReducers({});

const configureStore = () => createStore(rootReducer);

export default configureStore;

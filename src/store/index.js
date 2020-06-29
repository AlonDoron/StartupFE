import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../reducers";
import { loadUserMiddleware } from "../actions/authAction";

const rootReducer = combineReducers({ authReducer });
const middleware = [loadUserMiddleware];
const configureStore = () =>
  createStore(rootReducer, applyMiddleware(...middleware));

export default configureStore;

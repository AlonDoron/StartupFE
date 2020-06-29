import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRAION_SUCCESS,
  REGISTRAION_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/authTypes";
import { initailState } from "./initialState";

const authReducer = (state = initailState.auth, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        deviceToken: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTRAION_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTRAION_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        deviceToken: null,
        isLogin: false,
        isLoading: false,
        user: {},
      };

    default:
      return state;
  }
};

export default authReducer;

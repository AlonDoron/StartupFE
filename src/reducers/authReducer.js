import {
  USER_LOADING,
  IS_USER_EXISTS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRAION_SUCCESS,
  REGISTRAION_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/authTypes";
import { initialState } from "./initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case IS_USER_EXISTS:
      console.log("Reducer - Payload: " + action.payload);

      return {
        ...state,
        isUserExists: action.payload,
      };

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

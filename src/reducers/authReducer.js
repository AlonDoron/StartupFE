import * as authTypes from "../actions/authTypes";
import { initialState } from "./initialState";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case authTypes.GET_IS_USER_EXISTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case authTypes.GET_IS_USER_EXISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case authTypes.SET_IS_USER_EXISTS:
      return {
        ...state,
        isUserExists: action.payload,
      };

    case authTypes.GET_IS_USER_EXISTS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case authTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

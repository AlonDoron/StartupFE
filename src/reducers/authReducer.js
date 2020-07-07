import * as authTypes from "../actions/authTypes";
import { initialState } from "./initialState";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case authTypes.DONE_FETCHING:
      return {
        ...state,
        isDoneFetching: true,
      };

    case authTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case authTypes.AUTH_SUCCESS:
      return {
        ...state,
        isUserExists: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

import * as authTypes from "../actions/authTypes";
import { initialState } from "./initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.DONE_FETCHING:
      return {
        ...state,
        isDoneFetching: true,
      };

    case authTypes.IS_USER_EXISTS:
      return {
        ...state,
        isUserExists: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

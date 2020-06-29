import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  IS_SUBMITTINGN,
  INPUT_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTRAION_SUCCESS,
  REGISTRAION_FAIL,
  AUTH_USER,
} from "../actions/authTypes";

const initailState = {
  deviceToken: "",
  isLooged: null,
  isLoading: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  verifficationKey: "",
};

const authReducer = (state = initailState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLooged: true,
        isLoading: false,
        deviceToken: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTRAION_SUCCESS:
      return {
        ...state,
        isLooged: true,
        isLoading: false,
        user: action.payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTRAION_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        deviceToken: null,
        user: null,
        isLooged: false,
        isLoading: false,
      };
    case AUTH_USER:
      return {
        ...state,
        verifficationKey: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

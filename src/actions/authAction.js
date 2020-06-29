import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTRAION_SUCCESS,
  REGISTRAION_FAIL,
} from "./authTypes";

export const loadUser = () => {
  return {
    type: USER_LOADING,
  };
};
export const userLoaded = (token) => {
  return {
    type: USER_LOADED,
    payload: token,
  };
};

export const loginUser = (userObject) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userObject,
  };
};
export const loginUserFail = () => {
  return {
    type: LOGIN_FAIL,
  };
};
export const registerUser = (userObject) => {
  return {
    type: REGISTRAION_SUCCESS,
    payload: userObject,
  };
};
export const registerUserFail = () => {
  return {
    type: REGISTRAION_FAIL,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

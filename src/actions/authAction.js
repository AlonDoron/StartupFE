import {
  USER_LOADING,
  IS_USER_EXISTS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTRAION_SUCCESS,
  REGISTRAION_FAIL,
} from "./authTypes";

import { ApiConfig } from "../config";
import HttpClient from "../api/HttpClient";

export const loadUser = () => {
  return {
    type: USER_LOADING,
  };
};

export const isTokenExists = (token) => {
  return (dispatch) => {
    return HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", {
      userId: token,
    }).then((response) => {
      console.log(response);
      dispatch({
        type: IS_USER_EXISTS,
        payload: response,
      });
    });
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

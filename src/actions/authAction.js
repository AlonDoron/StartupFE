import { useEffect } from "react";
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
} from "./authTypes";

import { ApiConfig } from "../config";
import HttpClient from "../api/HttpClient";
import TokensHandler from "../api/TokensHandler";

export const loadUser = () => {
  return {
    type: USER_LOADING,
  };
};

export const loadUserMiddleware = ({ dispatch }) => (next) => (action) => {
  console.log("loadMiddleware");
  const fetchToken = async () => {
    return TokensHandler.getTokenFromDevice();
  };

  switch (action.type) {
    case USER_LOADING:
      console.log("USER_LOADING");
      fetchToken().then((token) => {
        let params = {
          userId: token,
        };
        dispatch({ type: USER_LOADING, payload: token });
        HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", params)
          .then((result) => {
            if (result) {
              dispatch({ type: USER_LOADED, payload: token });
              props.navigation.navigate("App");
            } else {
              props.navigation.navigate("Auth");
            }
          })
          .catch((err) => {
            console.log(err);
            props.navigation.navigate("Auth");
          });
      });
      dispatch({ loadUser });
      break;
    default:
      return;
  }
  return next(action);
};

export const loginUser = (userObject) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userObject,
  };
};
export const registerUser = (userObject) => {
  return {
    type: REGISTRAION_SUCCESS,
    payload: userObject,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
export const authUser = (key) => {
  return {
    type: AUTH_USER,
    payload: key,
  };
};

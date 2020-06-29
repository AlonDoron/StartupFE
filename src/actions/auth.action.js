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
} from "../constant/authTypes";

export const loadUser = (token) => {
  return {
    type: USER_LOADING,
    payload: token,
  };
};
export const loadedUser = (bol) => {
  return {
    type: USER_LOADED,
    payload: bol,
  };
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

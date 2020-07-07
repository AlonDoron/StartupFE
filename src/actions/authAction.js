import * as authTypes from "./authTypes";
import { ApiConfig } from "../config";
import HttpClient from "../api/HttpClient";

const authSuccess = (response) => {
  return {
    type: authTypes.AUTH_SUCCESS,
    payload: response,
  };
};

const doneFetching = () => {
  return {
    type: authTypes.DONE_FETCHING,
  };
};
const setUserId = (userId) => {
  return {
    type: authTypes.SET_USER_ID,
    payload: userId,
  };
};

export const isTokenExists = (token) => {
  return (dispatch) => {
    return HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", {
      userId: token,
    }).then((response) => {
      dispatch(authSuccess(response));
      dispatch(setUserId(token));
      dispatch(doneFetching());
    });
  };
};

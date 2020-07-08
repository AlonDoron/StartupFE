import * as authTypes from "./authTypes";
import { ApiConfig } from "../config";
import HttpClient from "../api/HttpClient";

const setUserId = (userId) => {
  return {
    type: authTypes.SET_USER_ID,
    payload: userId,
  };
};

const setIsUserExists = (response) => {
  return {
    type: authTypes.SET_IS_USER_EXISTS,
    payload: response,
  };
};
export const isTokenExists = (token) => {
  return (dispatch) => {
    dispatch({ type: authTypes.GET_IS_USER_EXISTS_REQUEST });

    return HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", {
      userId: token,
    })
      .then((response) => {
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_SUCCESS });
        dispatch(setIsUserExists(response));
        if (response) dispatch(setUserId(token));
      })
      .catch((errors) => {
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_ERROR, payload: errors });
      });
  };
};

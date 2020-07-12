import * as authTypes from "./authTypes";
import * as authService from "../api/wrappers/authService";
import { apiConfig } from "../config";
import HttpClient from "../api/HttpClient";

const setUserId = (userId) => {
  return {
    type: authTypes.SET_USER_ID,
    payload: userId,
  };
};

export const setIsUserExists = (response) => {
  return {
    type: authTypes.SET_IS_USER_EXISTS,
    payload: response,
  };
};

export const isUserExistsByToken = (token) => {
  return (dispatch) => {
    dispatch({ type: authTypes.GET_IS_USER_EXISTS_REQUEST });

    return HttpClient.get(apiConfig.IDENTITY_PORT, "api/identity", {
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

export const isUserExistsByPhoneNumber = (sentFrom, phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: authTypes.GET_IS_USER_EXISTS_REQUEST });
    return authService
      .checkIfUserExists(sentFrom, phoneNumber)
      .then((response) => {
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_SUCCESS });
        dispatch(setIsUserExists(response));
      })
      .catch((errors) => {
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_ERROR, payload: errors });
      });
  };
};

export const verifyRequest = (sentFrom, values) => {
  return (dispatch) => {
    // TODO: CHANGE TO SOMETHING LIKE START_FETCH
    dispatch({ type: authTypes.GET_IS_USER_EXISTS_REQUEST });
    return authService
      .createVerifyRequest(sentFrom, values)
      .then((verificationRequestKey) => {
        // TODO: CHANGE TO SOMETHING LIKE STOP_FETCH
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_SUCCESS });

        return verificationRequestKey;
      })
      .catch((errors) =>
        //TODO: CHANGE TO SOMETHING LIKE FETCH_ERROR
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_ERROR, payload: errors })
      );
  };
};

export const verifyCode = (sentFrom, values) => {
  return (dispatch) => {
    return authService
      .createVerifyCode(sentFrom, values)
      .then((response) => {
        dispatch(setUserId(response));
        return response;
      })
      .catch((errors) =>
        dispatch({ type: authTypes.GET_IS_USER_EXISTS_ERROR, payload: errors })
      );
  };
};

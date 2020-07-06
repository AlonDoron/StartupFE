import * as authTypes from "./authTypes";
import { ApiConfig } from "../config";
import HttpClient from "../api/HttpClient";

export const isTokenExists = (token) => {
  return (dispatch) => {
    return HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", {
      userId: token,
    }).then((response) => {
      dispatch({
        type: authTypes.IS_USER_EXISTS,
        payload: response,
      });
      dispatch({ type: authTypes.DONE_FETCHING });
    });
  };
};

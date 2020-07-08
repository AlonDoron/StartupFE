import apiConfig from "../../config/apiConfig";
import HttpClient from "../HttpClient";

export const checkIfUserExists = async (sentFrom, vals) => {
  return await HttpClient.get(
    getPort(sentFrom),
    `api/${sentFrom}/checkIfUserExists`,
    vals
  );
};

const getPort = (sentFrom) => {
  if (sentFrom === "Login") return apiConfig.LOGIN_PORT;
  if (sentFrom === "Registration") return apiConfig.REGISTRATION_PORT;
};

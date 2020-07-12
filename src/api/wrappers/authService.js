import { apiConfig } from "../../config";
import HttpClient from "../HttpClient";

export const checkIfUserExists = async (sentFrom, params) => {
  return await HttpClient.get(
    getPort(sentFrom),
    `api/${sentFrom}/checkIfUserExists`,
    params
  );
};

export const createVerifyRequest = async (sentFrom, params) => {
  return await HttpClient.create(
    getPort(sentFrom),
    `api/${sentFrom}/CreateVerficationRequest`,
    params
  );
};

export const createVerifyCode = async (sentFrom, params) => {
  return await HttpClient.create(
    getPort(sentFrom),
    `api/${sentFrom}/VerifyCode`,
    params
  );
};

const getPort = (sentFrom) => {
  if (sentFrom === "Login") return apiConfig.LOGIN_PORT;
  if (sentFrom === "Registration") return apiConfig.REGISTRATION_PORT;
};

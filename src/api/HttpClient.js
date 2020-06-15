import { ApiConfig } from "../config";

const request = async (url, params, method = "GET") => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(`${ApiConfig.SERVER_URL}/${url}`, options);

  if (response.status !== 200) {
    return generateErrorResponse(
      "The server responded with an unexpected status."
    );
  }

  const result = await response.json();

  return result;
};

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};

const generateErrorResponse = (message) => {
  return {
    status: "error",
    message,
  };
};

const get = (url, params) => {
  return request(url, params);
};

const create = (url, params) => {
  return request(url, params, "POST");
};

const update = (url, params) => {
  return request(url, params, "PUT");
};

const remove = (url, params) => {
  return request(url, params, "DELETE");
};

export default {
  get,
  create,
  update,
  remove,
};

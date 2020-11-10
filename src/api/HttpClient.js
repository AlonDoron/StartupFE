import { apiConfig } from "~config";

const request = async (port, route, params, method = "GET") => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    if (method === "GET") {
      route += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const targetUrl = `${apiConfig.SERVER_URL}:${port}/${route}`;
  console.log(targetUrl);
  const response = await fetch(targetUrl, options);

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

const get = (port, route, params) => {
  return request(port, route, params);
};

const create = (port, route, params) => {
  return request(port, route, params, "POST");
};

const update = (port, route, params) => {
  return request(port, route, params, "PUT");
};

const remove = (port, route, params) => {
  return request(port, route, params, "DELETE");
};

export default {
  get,
  create,
  update,
  remove,
};

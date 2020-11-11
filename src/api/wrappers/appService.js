import { apiConfig } from "config";
import HttpClient from "../HttpClient";

export const getProviders = async (location) => {
  return await HttpClient.get(
    apiConfig.CONSUMER_PORT,
    "api/Consumer",
    location
  );
};

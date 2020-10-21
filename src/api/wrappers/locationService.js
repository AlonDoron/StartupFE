import { apiConfig } from "../../config";
import HttpClient from "../HttpClient";


export const getServiceProviders = async (params) => {
  return await HttpClient.get(
   apiConfig.CONSUMER_PORT,
     "api/Consumer",
    params
  );
};

import axios from "axios";
import { ApiConfig } from "../config";

export default axios.create({
  baseURL: ApiConfig.SERVER_URL,
  headers: {
    ...ApiConfig.HEADERS,
    Authorization: "97a74c03004e7d6b0658dfdfde34fd6aa4b14ddb",
  },
});

import axios from "axios";

import request from "./axios.request";
import response from "./axios.response";

const axiosInstance = axios.create({
  baseURL: "https://pledge-management-api-pre-order.cfsprotocol.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  request.onRequest,
  request.onRequestError
);
axiosInstance.interceptors.response.use(
  response.onResponse,
  response.onResponseError
);

export default axiosInstance;

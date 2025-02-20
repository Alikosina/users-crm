import axios from "axios";
import { apiUrl } from "../constants";
import { getAccessToken } from "./tokens";

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

const apiClient = axios.create({
  baseURL: apiUrl,
});

// TODO: Add passing Access Token Logic and Refresh Token Logic
apiClient.interceptors.request.use(async (req) => {
  if (req.url !== "/auth/login" && req.url !== "/auth/register") {
    const token = getAccessToken();
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
apiClient.interceptors.response.use(async (resp) => {
  return resp;
});

export { apiClient };

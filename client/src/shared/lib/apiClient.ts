import axios from "axios";
import { apiUrl } from "../constants";

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

const apiClient = axios.create({
  baseURL: apiUrl,
});

// TODO: Add passing Access Token Logic and Refresh Token Logic
apiClient.interceptors.request.use(async (req) => {
  return req;
});
apiClient.interceptors.response.use(async (resp) => {
  return resp;
});

export { apiClient };

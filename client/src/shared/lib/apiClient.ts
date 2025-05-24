import axios from "axios";
import { apiUrl } from "../constants";
import { getAccessToken, getRefreshToken, setTokens, Tokens } from "./tokens";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

const apiClient = axios.create({
  baseURL: apiUrl,
});

apiClient.interceptors.request.use(async (req) => {
  if (req.url !== "/auth/login" && req.url !== "/auth/register") {
    const token = getAccessToken();
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
apiClient.interceptors.response.use(
  async (resp) => {
    return resp;
  },
  async (err) => {
    if (err.response.status === 401) {
      const refreshToken = getRefreshToken();

      const { data } = await axios.post<Tokens>(
        `${apiUrl}/auth/refresh`,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setTokens(data);

      return apiClient(err.config);
    }

    return err;
  }
);

export { apiClient };

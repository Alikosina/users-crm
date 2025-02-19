import axios from "axios";
import { apiUrl } from "../constants";

export const apiClient = axios.create({
  baseURL: apiUrl,
});

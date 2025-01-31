import axios from "axios";
import { apiUrl } from "../constants";

console.log("apiUrl = ", apiUrl);

export const apiClient = axios.create({
  baseURL: apiUrl,
});

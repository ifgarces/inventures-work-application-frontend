import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import * as assert from "simple-assert";

assert.not(_.isEmpty(process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL), "NEXT_PUBLIC_BACKEND_API_BASE_URL is unset");


export const backendApiAxiosInstance :AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

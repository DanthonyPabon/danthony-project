/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Config from "react-native-config";

export interface IRes<T> {
  status: number;
  data: T;
  error: boolean | string;
}

type IProRes = Promise<AxiosResponse | any>;

export interface IRequestParams {
  url: string;
  params?: AxiosRequestConfig;
  data?: any;
}

axios.defaults.baseURL = Config?.API_URL || "";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.get["X-RapidAPI-Key"] = Config?.RAPID_API_KEY || "";
axios.defaults.headers.get["X-RapidAPI-Host"] = Config?.RAPID_API_HOST || "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

export const get = async (config: IRequestParams): IProRes => {
  const { url, params } = config;
  return axios.get(url, params).catch((error) => {
    return error.response;
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Colors } from "styles/colors";

interface IShowMessageParams extends AxiosResponse {
  status: number;
}

const logMessageFormatter = (
  code: number,
  message?: string,
  explanation?: string
) => {
  let colorBack = "transparency";
  let moreInfo = "";
  switch (code) {
    case 201:
      colorBack = Colors.green;
      moreInfo = " Created";
      break;
    case 200:
    case 204:
      colorBack = Colors.green;
      moreInfo = " Success";
      break;
    case 302:
      moreInfo = " Previously “Moved temporarily”";
      colorBack = Colors.blue;
      break;
    case 400:
    case 401:
      moreInfo = " Unauthorized";
      colorBack = Colors.red;
      break;
    case 403:
      moreInfo = " Forbidden";
      colorBack = Colors.red;
      break;
    case 404:
      moreInfo = " Endpoint not Found";
      colorBack = Colors.red;
      break;
    case 405:
    case 422:
      moreInfo = " Unprocurable Entity";
      colorBack = Colors.red;
      break;
    case 500:
    case 503:
      moreInfo = " Internal Server Error";
      colorBack = Colors.red;
      break;
    case 504:
      moreInfo = " Gateway Timeout";
      colorBack = Colors.yellow;
      break;
    case 522:
      moreInfo = " Connection Timed Out";
      colorBack = Colors.yellow;
      break;
    default:
  }
  const st = "width: 20px;height : 20px;border-radius : 5px;padding: 2px 5px;";
  const log = `background-color: ${colorBack};color: ${
    colorBack === Colors.yellow ? "black" : "white"
  };${st}`;
  const logE = `background-color: ${Colors.yellow};color:black;${st}`;
  console.log(`%c${code}${moreInfo}%c ${message}`, log, "");
  if (explanation) {
    console.log(`%cPossible Error ==>%c ${explanation}`, logE, "");
  }
};

const getInfoBody = (body: any) => {
  if (typeof body === "string") {
    return JSON.parse(body);
  }
  return body;
};

const getInfoURL = ({ baseURL, method, url }: AxiosRequestConfig) => {
  return `${method} ${baseURL}${url}`;
};

const logShowMessage = ({ config, status, data }: IShowMessageParams) => {
  const { method, headers } = config;
  console.group("=== NEW Check Response ===");
  logMessageFormatter(status, getInfoURL(config));
  console.groupCollapsed("Data");
  console.log(data);
  console.groupEnd();
  console.groupCollapsed("Headers");
  console.log(headers);
  console.groupEnd();
  if (method === "post" || method === "patch") {
    console.groupCollapsed("Body");
    console.log(getInfoBody(config.data));
    console.groupEnd();
  }
  console.groupEnd();
};

const LogUtils = {
  getInfoBody,
  getInfoURL,
  logMessageFormatter,
  logShowMessage,
};

export default LogUtils;

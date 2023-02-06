/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */
import { AxiosResponse } from "axios";
import { IRes } from "services/fetch";
import LogUtils from "utils/log";

const { logShowMessage } = LogUtils;

type IProRes = Promise<IRes<any>>;

interface IResponseParams extends AxiosResponse {
  status: number;
}

export interface IUseRequestState {
  onResponse: (res: any) => IProRes;
}

const useRequestHandler = (): IUseRequestState => {
  const onResponse = async (res: any): IProRes => {
    const resInfo: IResponseParams = await res;
    const { data, status } = resInfo;
    logShowMessage({ ...resInfo, status });
    switch (status) {
      case 522:
      case 504:
        return { data, error: true, status };
      case 503:
      case 500:
      case 422:
      case 401:
        return { data, error: true, status };
      case 409:
        return { data, error: true, status };
      case 404:
        return { data, error: true, status };
      case 403:
        return { data, error: true, status };
      case 400:
        return { data, error: true, status };
      case 204:
      case 201:
      case 200:
        return { data: data ? data : "", error: false, status };
      default:
        return { data, error: true, status };
    }
  };

  return { onResponse };
};

export default useRequestHandler;

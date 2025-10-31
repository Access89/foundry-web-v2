/* eslint-disable @typescript-eslint/no-explicit-any */

// import { variables } from "@/utils/helper";
import axios, { AxiosRequestConfig } from "axios";


interface IOptions {
  url: string;
  token?: string;
  method: string;
  data?: any;
  params?: any;
  header?: any;
}

export const apiClient = async (options: IOptions): Promise<any> => {
  try {
    const requestConfig = requestConfigInterface(options);

    return await axios(requestConfig);
  } catch (error: any) {
    const responseData = error?.response?.data;
    console.log(
      "🚀🚀 -> file: api.client.ts:23 -> apiClient -> error -> responseData:",
      responseData
    );

   
    throw error;
  }
};

const requestConfigInterface = (options: IOptions): AxiosRequestConfig<any> => {

  return {
    method: options.method,
    url: options.url,
    headers: {
      // Authorization: `Bearer ${token?.access}`,
      "Cache-Control": "no-cache",
      "Max-Forwards": 3,
      "x-app-env": "prod",
      // "x-app-env": variables.environment,
      ...options.header,
    },
    params: options.params,
    data: options.data,
    timeout: 1200000,
    withCredentials: false,
    responseType: options.header?.["responseType"] || "json",
    responseEncoding: "utf8",
    maxRedirects: 5,
    decompress: true,
  };
};

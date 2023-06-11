import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(res);
    }
    return res;
  },
  async (error) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }

    return Promise.reject(error.response.data);
  }
);

export const customAxios = async <T>(
  props: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const result = await axiosInstance(props);
  return result;
};

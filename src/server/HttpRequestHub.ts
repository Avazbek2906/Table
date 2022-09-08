import { axiosInstance } from "./host";

export const HttpRequestHub = (config: any) => {
  return axiosInstance(config);
};

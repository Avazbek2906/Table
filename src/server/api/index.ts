import { CreateFunc, EditFunc, GetFunc } from "../config";

//Filter configs
export const FilterConfig = (data: any) => {
  return CreateFunc(`/filter/`, data);
};

//Get configs
export const GetApplicationsConfig = () => {
  return GetFunc("/applications/");
};

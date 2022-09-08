import { HttpRequestHub } from "../HttpRequestHub";

export const GetFunc = (url: string, data = "") => {
  const config = {
    method: "GET",
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};

export const DeleteFunc = (url: string) => {
  const config = {
    method: "DELETE",
    url: `${url}`,
  };
  return HttpRequestHub(config);
};

export const CreateFunc = (url: string, data: any) => {
  const config = {
    method: "POST",
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};

export const EditFunc = (url: string, data: any, method = "PUT") => {
  const config = {
    method: method,
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};

import { message } from "antd";
import axios from "axios";
import { deleteCookie, getCookie } from "../utils/cookie";

export let host = "https://ttj.edu.uz/";
// export let host = process.env.REACT_APP_BASE_URL;
export const token = typeof window !== "undefined" && getCookie("token");

export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
};

export let axiosInstance = axios.create({
  baseURL: `${host}api`,
  headers,
  timeout: 100000,
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response) {
      let obj = error.response.data;
      if (error.response.status === 403) {
        deleteCookie("token");
        window.location.href = "/";
      } else if (error.response.status === 401) {
        if (obj.detail === "Autentifikatsiya ma'lumotlari taqdim etilmagan.") {
          deleteCookie("token");
          window.location.href = "/";
        }
      } else if (error.response.status === 500) {
        message.error(
          "Server bilan bog'liq xatolik yuz berdi. Bu haqda ma'sul xodimlarga habar bering",
          5
        );
      } else {
        console.log(obj);
        if (obj.detail) {
          message.error(obj.detail, 10);
        } else if (obj.length > 0) {
          obj.forEach((item: any) => {
            message.error(item);
          });
        } else {
          for (let key in obj) {
            obj[key].forEach((item: any) => {
              message.error(item);
            });
          }
        }
      }
    }
    throw error;
  }
);

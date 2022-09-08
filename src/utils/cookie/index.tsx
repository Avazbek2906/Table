import Cookie from "js-cookie";

export const deleteCookie = (name: string) => {
  Cookie.remove(name);
};

export const setCookie = (name: string, value: any) => {
  Cookie.set(name, value, { path: "/" });
};

export const getCookie = (name: string) => {
  const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
};

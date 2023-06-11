import { Menu, MenuDetail } from "@types";
import { customAxios } from "./customAxios";

export const getMenuList = () => {
  return customAxios<Menu[]>({
    url: "/menus",
    method: "GET",
  }).then((res) => res.data);
};

export const getMenuDetail = (menuId: number) => {
  return customAxios<MenuDetail>({
    url: `.menus/${menuId}`,
    method: "GET",
  }).then((res) => res.data);
};

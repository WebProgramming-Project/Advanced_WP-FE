import { Menu, MenuDetail, InsertMenu } from "@types";
import { customAxios } from "./customAxios";

export const getMenuList = () => {
  return customAxios<Menu[]>({
    url: "/menus",
    method: "GET",
  }).then((res) => res.data);
};

export const getMenuDetail = (menuId: number) => {
  return customAxios<MenuDetail>({
    url: `/menus/${menuId}`,
    method: "GET",
  }).then((res) => res.data);
};

export const getImage = (menuId: number) => {
  return customAxios<string>({
    url: `/menus/${menuId}/image`,
    method: "GET",
  }).then((res) => res.data);
};

export const postMenu = (data: InsertMenu) => {
  return customAxios<Menu>({
    url: "/menus",
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    data: data,
  }).then((res) => res.data);
};

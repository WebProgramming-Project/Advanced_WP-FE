import { useMutation, useQuery } from "react-query";
import { getMenuDetail, getMenuList, postMenu } from "../api/menu";
import { InsertMenu } from "@types";

// 메인페이지 메뉴 리스트 조회
export const useGetMenuList = () => {
  return useQuery(["menuList"], getMenuList, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

// 메뉴 상세 조회
export const useGetMenuDetail = (menuId: number) => {
  return useQuery(["menuDetail", menuId], () => getMenuDetail(menuId), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

// 메뉴 등록
export const usePostMenu = () => {
  return useMutation((data: InsertMenu) => postMenu(data));
};

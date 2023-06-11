import { useQuery } from "react-query";
import { getMenuDetail, getMenuList } from "../api/menu";

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

import { useQuery } from "react-query";
import { getStore } from "../api/store";

// 가게 정보 조회
export const useGetStore = () => {
  return useQuery(["store"], getStore, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

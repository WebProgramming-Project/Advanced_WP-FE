import { Order, OrderBasket } from "@types";
import { useMutation, useQuery } from "react-query";
import { getAllOrderList, postOrder, postOrderBaseket } from "../api/order";

// 주문하기
export const usePostOrder = () => {
  return useMutation((data: Order) => postOrder(data));
};

// 주문내역 조회
export const useGetAllOrderList = () => {
  return useQuery(["allOrderList"], getAllOrderList, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

// 장바구니에 담기
export const usePostOrderBasket = () => {
  return useMutation((data: OrderBasket) => postOrderBaseket(data));
};

import { Order, OrderBasket } from "@types";
import { useMutation, useQuery } from "react-query";
import {
  deleteOrder,
  getAllOrderList,
  getOrderBaseket,
  getOrderStat,
  postOrder,
  postOrderBaseket,
} from "../api/order";

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

// 장바구니 조회
export const useGetOrderBasket = () => {
  return useQuery(["orderBasket"], getOrderBaseket, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

// 장바구니 삭제
export const useDeleteOrder = () => {
  return useMutation((orderItemId: number) => deleteOrder(orderItemId));
};

// 주문 통계 조회
export const useGetOrderStat = () => {
  return useQuery(["orderStat"], getOrderStat, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

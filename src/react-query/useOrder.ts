import { Order, OrderBasket } from "@types";
import { useMutation, useQuery } from "react-query";
import {
  getAllOrderList,
  postOrder,
  postOrderBaseket,
  postComplete,
  postCencel,
  postAccept,
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

// 배달 완료
export const usePostComplete = (id: number) => {
  return postComplete(id);
};

//배달 취소
export const usePostCancel = (id: number) => {
  return postCencel(id);
};

//배달 수락
export const usePostAccept = (id: number) => {
  return postAccept(id);
};

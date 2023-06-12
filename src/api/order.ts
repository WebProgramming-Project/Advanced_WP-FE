import { AllOrders, Order, OrderBasket, OrderBasketList } from "@types";
import { customAxios } from "./customAxios";

export const postOrder = (data: Order) => {
  return customAxios({
    url: "/orders",
    method: "POST",
    data,
  }).then((res) => res.data);
};

export const getAllOrderList = () => {
  return customAxios<AllOrders[]>({
    url: "/orders/myorders",
    method: "GET",
  }).then((res) => res.data);
};

export const postOrderBaseket = (data: OrderBasket) => {
  return customAxios({
    url: "/orders/items",
    method: "POST",
    data: data,
  }).then((res) => res.data);
};

export const getOrderBaseket = () => {
  return customAxios<OrderBasketList[]>({
    url: "/orders/items",
    method: "GET",
  }).then((res) => res.data);
};

export const deleteOrder = (orderItemId: number) => {
  return customAxios({
    url: `/orders/items/${orderItemId}`,
    method: "DELETE",
  }).then((res) => res.data);
};

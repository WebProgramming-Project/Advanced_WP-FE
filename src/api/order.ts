import { AllOrders, Order, OrderBasket } from "@types";
import { customAxios } from "./customAxios";

export const postOrder = (data: Order) => {
  return customAxios({
    url: "/orders",
    method: "POST",
    data,
  }).then((res) => res.data);
};

export const getAllOrderList = () => {
  return customAxios<AllOrders>({
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

export const postComplete = (id: number) => {
  return customAxios({
    url: "/orders/" + id + "/complete",
    method: "POST",
  });
};

export const postCencel = (id: number) => {
  return customAxios({
    url: "/orders/" + id + "/cancel",
    method: "POST",
  });
};

export const postAccept = (id: number) => {
  return customAxios({
    url: "/orders/" + id + "/accept",
    method: "POST",
  });
};

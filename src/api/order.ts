import { AllOrders, Order } from "@types";
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

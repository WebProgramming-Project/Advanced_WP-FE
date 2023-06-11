import { Store } from "@types";
import { customAxios } from "./customAxios";

export const getStore = () => {
  return customAxios<Store>({
    url: "/stores",
    method: "GET",
  }).then((res) => res.data);
};

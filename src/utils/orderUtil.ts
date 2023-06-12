import { AllOrders, OrderStat, OrderSummaryInfo } from "@types";

const status = [
  { eng: "ORDER", kor: "주문 중" },
  { eng: "DEIVERY", kor: " 배달 중" },
  { eng: "COMPLETE", kor: "배달 완료" },
  { eng: "CANCEL", kor: "주문 취소" },
];

export function toOrderList(data: AllOrders): OrderSummaryInfo {
  const orderData = {
    orderId: data.orderId,
    totalPrice: data.totalPrice,
    discountPrice: data.discountPrice,
    menuNames: data.orderItems.map((item) => item.menu.menuName),
    orderStatus:
      status.find((item) => item.eng === data.orderStatus)?.kor || "",
  };

  return orderData;
}

export function curentOrderStauts(status: string): number {
  if (status === "ORDER") return 1;
  else if (status === "DELIVERY") return 2;
  else if (status === "COMPLETE") return 3;
  else return 0;
}

export function orderStat(statData: OrderStat[]) {
  const statArr = statData.map((data) => {
    return {
      name: data.menu.menuName,
      value: data.count,
    };
  });
  return statArr;
}

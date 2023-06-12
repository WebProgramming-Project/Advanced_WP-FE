declare module "@types" {
  interface Order {
    storeId: number;
    orderItemIds: number[];
  }

  interface AllOrders {
    orderId: number;
    totalPrice: number;
    discountPrice: number;
    orderItems: OrderBasketList[];
    orderStatus: string;
  }

  interface OrderBasket {
    storeId: number;
    menuId: number;
    count: number;
    menuOptionIds: number[];
  }

  interface OrderBasketList {
    orderItemId: number;
    count: number;
    price: number;
    menuOptions: MenuOption[];
    menu: Menu;
  }

  interface OrderSummaryInfo {
    orderId: number;
    totalPrice: number;
    discountPrice: number;
    menuNames: string[];
    orderStatus: string;
  }

  interface OrderStat {
    menu: Menu;
    count: number;
  }
}

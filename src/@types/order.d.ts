declare module "@types" {
  interface Order {
    storeId: number;
    menus: OrderMenu[];
  }

  interface AllOrders {
    orderId: number;
    totalPrice: number;
    discountPrice: number;
    orderItems: {
      orderItemId: number;
      count: number;
      price: number;
      menuOptions: MenuOption[];
      menu: Menu;
    };
    orderStatus: string;
  }

  interface OrderBasket {
    storeId: number;
    menuId: number;
    count: number;
    menuOptionIds: number[];
  }
}

declare module "@types" {
  interface OrderList {
    id: number;
    orderDate: string;
    orders: Menu[];
  }

  interface OrderMenu {
    menuId: number;
    menuName: string;
    menuPrice: number;
    menuImage: string;
    isSet: boolean;
  }
}

declare module "@types" {
  interface Menu {
    menuId: number;
    menuName: string;
    menuPrice: number;
    menuDescription: string;
  }

  interface InsertMenu {
    formData: FormData;
  }

  interface MenuOption {
    menuOptionId: number;
    menuOptionName: string;
    menuOptionPrice: number;
  }

  interface MenuDetail {
    menuId: number;
    menuName: string;
    menuPrice: number;
    menuDescription: string;
    discountPolicy: string;
    menuOptionList: MenuOption[];
    sideMenuList: Menu[];
  }

  interface OrderMenu {
    menuId: number;
    count: number;
    menuOptionId: number[];
  }
}

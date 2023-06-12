declare module "@types" {
  interface Menu {
    menuId: number;
    menuName: string;
    menuPrice: number;
    discountPolicy: string;
    menuDescription: string;
    discountPolicy: string;
    image: string;
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
    image: string;
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

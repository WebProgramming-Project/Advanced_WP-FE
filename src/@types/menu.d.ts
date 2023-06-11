declare module "@types" {
  interface Menu {
    menuId: number;
    menuName: string;
    menuPrice: number;
    menuDescription: string;
    image: string[];
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
    image: string[];
    discountPolicy: string;
    menuOptionList: MenuOption[];
    sideMenuList: Menu[];
    sideMenu: {
      menuId: number;
      menuName: string;
      menuPrice: number;
      menuDescription: string;
      image: string[];
      dicountPolicy: string;
      menuType: string;
      main: boolean;
      store: StoreInfo;
    };
    menuOption: {
      menuOptionId: number;
      optionName: string;
      extraPrice: number;
      menu: Menu;
    };
  }

  interface OrderMenu {
    menuId: number;
    count: number;
    menuOptionId: number[];
  }
}

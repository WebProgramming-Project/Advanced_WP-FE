declare module "@types" {
  interface StoreInfo {
    storeId: number;
    storeName: string;
    address: string;
    phoneNumber: string;
    operationTime: {
      open: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      close: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      operating: boolean;
    };
    open: boolean;
  }

  interface Store {
    storeName: string;
    address: string;
    phoneNumber: string;
    operationTime: {
      open: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      close: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
    };
  }
}

import { atom } from "recoil";

export const storeInfoState = atom({
  key: "storeInfoState",
  default: {
    storeId: 1000,
    storeName: "맘스터치",
    address: "경상북도 구미시 대학로 61",
    phoneNumber: "054-476-9958",
    open: "09:00:00",
    close: "22:00:00",
  },
});

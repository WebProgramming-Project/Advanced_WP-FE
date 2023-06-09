import tanduri from "../img/탄두리.png";
import mara from "../img/마라싸이버거.png";
import ara from "../img/아라비아.png";
import psy from "../img/싸이.png";
import potato from "../img/감튀.png";
import cola from "../img/콜라.png";

export const data = {
  menu: [
    {
      id: 1,
      imgSrc: tanduri,
      title: "탄두리싸이버거",
      description:
        "인도식 탄두리소스와 크리미한 그위에르치즈소스 싸이패티와의 환상적인 조화",
    },
    {
      id: 2,
      imgSrc: mara,
      title: "마라싸이버거",
      description: "마라 특유의 매콤 알싸한과 향이 살아있는 중화풍의 싸이버거",
    },
    {
      id: 3,
      imgSrc: ara,
      title: "아리비아따치즈버거",
      description:
        "고소한 통모짜렐라 치즈패티 & 부드러운 통닭다리살 & 매콤한 아라비아따 소스가 선보이는 환상적인 조화",
    },
    {
      id: 4,
      imgSrc: psy,
      title: "싸이버거",
      description: "싸이버거의 정석, 싸이소스와 싸이패티의 환상적인 조화",
    },
  ],
};

export const orderData = {
  order: [
    {
      id: 1,
      orderDate: "2021-05-02",
      menus: [
        {
          menu: "싸이버거",
          imgSrc: psy,
          quantity: 1,
          price: 5000,
          isSet: true,
        },
      ],
    },
    {
      id: 2,
      orderDate: "2021-05-02",
      menus: [
        {
          menu: "싸이버거",
          imgSrc: psy,
          quantity: 1,
          price: 5000,
          isSet: false,
        },
        {
          menu: "콜라",
          imgSrc: cola,
          quantity: 1,
          price: 1000,
          isSet: false,
        },
      ],
    },
    {
      id: 3,
      orderDate: "2021-05-02",
      menus: [
        {
          menu: "마라싸이버거",
          imgSrc: mara,
          quantity: 3,
          price: 5000,
          isSet: true,
        },
        {
          menu: "케이준양념감자",
          imgSrc: potato,
          quantity: 1,
          price: 2000,
          isSet: false,
        },
      ],
    },
  ],
};

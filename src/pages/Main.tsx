import { Box, Flex, Image, Text } from "@chakra-ui/react";

import mainImg from "../assets/img/main.png";
import tanduri from "../assets/img/탄두리.png";
import mara from "../assets/img/마라싸이버거.png";
import ara from "../assets/img/아라비아.png";
import psy from "../assets/img/싸이.png";
import { semanticColors } from "../styles";
import { MenuContainer } from "../components/main";

const data = {
  menu: [
    {
      imgSrc: tanduri,
      title: "탄두리싸이버거",
      description:
        "인도식 탄두리소스와 크리미한 그위에르치즈소스 싸이패티와의 환상적인 조화",
    },
    {
      imgSrc: mara,
      title: "마라싸이버거",
      description: "마라 특유의 매콤 알싸한과 향이 살아있는 중화풍의 싸이버거",
    },
    {
      imgSrc: ara,
      title: "아리비아따치즈버거",
      description:
        "고소한 통모짜렐라 치즈패티 & 부드러운 통닭다리살 & 매콤한 아라비아따 소스가 선보이는 환상적인 조화",
    },
    {
      imgSrc: psy,
      title: "싸이버거",
      description: "싸이버거의 정석, 싸이소스와 싸이패티의 환상적인 조화",
    },
  ],
};

export const Main = () => {
  return (
    <Box w="full">
      <Box h="24rem">
        <Image w="full" h="full" src={mainImg} />
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <Text color={semanticColors.primary}>
          현재 할인 정보 [오전 11시 이전 주문 시 1000원 할인]
        </Text>
      </Flex>
      <MenuContainer menu={data.menu} />
    </Box>
  );
};

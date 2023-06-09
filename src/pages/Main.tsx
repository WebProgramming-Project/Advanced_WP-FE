import { Box, Flex, Image, Text } from "@chakra-ui/react";

import mainImg from "../assets/img/main.png";
import { semanticColors } from "../styles";
import { MenuContainer } from "../components/main";
import { data } from "../assets/data/data";

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

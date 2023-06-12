import { Box, Flex, Image, Text } from "@chakra-ui/react";

import mainImg from "../assets/img/main.png";
import { semanticColors } from "../styles";
import { MenuContainer } from "../components/main";
import { useGetMenuList } from "../react-query/useMenu";
import { useEffect, useState } from "react";
import { Menu as MenuInfomation } from "@types";

export const Main = () => {
  const { data: menuList } = useGetMenuList();

  const [menus, setMenus] = useState<MenuInfomation[]>([]);

  useEffect(() => {
    if (!menuList) return;

    setMenus(menuList);
  }, [menuList]);

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
      <MenuContainer menu={menus} />
    </Box>
  );
};

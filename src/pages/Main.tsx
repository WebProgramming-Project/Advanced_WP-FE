import { Box, Image } from "@chakra-ui/react";

import mainImg from "../assets/img/main.png";
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
      <MenuContainer menu={menus} />
    </Box>
  );
};

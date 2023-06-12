import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { useGetMenuList } from "../../../react-query/useMenu";
import { Menu } from "@types";

export const MenuContainer = () => {
  const { data } = useGetMenuList();
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    if (!data) return;
    setMenus(data);
  }, [data]);

  return (
    <Box w="full">
      {menus.map((item) => (
        <MenuItem
          name={item.menuName}
          price={item.menuPrice}
          menuDescription={item.menuDescription}
        />
      ))}
    </Box>
  );
};

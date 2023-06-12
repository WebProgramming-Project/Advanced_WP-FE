import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import PolicyItem from "./PolicyItem";
import { useGetMenuList } from "../../../react-query/useMenu";
import { Menu } from "@types";

export const PolicyContainer = () => {
  const { data } = useGetMenuList();
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    if (!data) return;
    setMenus(data);
  }, [data]);

  console.log(menus);

  return (
    <Box w="full">
      {menus.map((item) => (
        <PolicyItem
          id={item.menuId}
          name={item.menuName}
          price={item.menuPrice}
          menuDescription={item.menuDescription}
          discountPolicy={item.discountPolicy}
          image={item.image}
        />
      ))}
    </Box>
  );
};

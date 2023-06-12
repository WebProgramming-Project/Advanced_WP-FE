import { SimpleGrid } from "@chakra-ui/react";
import { MenuItem } from ".";
import { Menu } from "@types";

interface MenuContainerProps {
  menu: Menu[];
}

export const MenuContainer = ({ menu }: MenuContainerProps) => {
  return (
    <SimpleGrid
      columns={4}
      my="1rem"
      w="full"
      borderY="1px solid"
      borderColor="gray.2"
    >
      {menu.map((item) => (
        <MenuItem
          id={item.menuId}
          title={item.menuName}
          description={item.menuDescription}
        />
      ))}
    </SimpleGrid>
  );
};

import { SimpleGrid } from "@chakra-ui/react";
import { MenuItem } from ".";

interface MenuContainerProps {
  menu: {
    imgSrc: string;
    title: string;
    description: string;
  }[];
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
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </SimpleGrid>
  );
};

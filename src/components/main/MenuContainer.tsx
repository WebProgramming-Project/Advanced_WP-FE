import { SimpleGrid } from "@chakra-ui/react";
import { MenuItem } from ".";

interface MenuContainerProps {
  menu: {
    id: number;
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
          id={item.id}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </SimpleGrid>
  );
};

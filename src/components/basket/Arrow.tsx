import { HStack, Icon } from "@chakra-ui/react";
import { BsChevronDoubleRight } from "react-icons/bs";

interface ArrowProps {
  color?: string;
}

export const Arrow = ({ color }: ArrowProps) => {
  return (
    <HStack spacing="-2.5rem" color={color || "gray.5"}>
      <Icon as={BsChevronDoubleRight} fontSize="7rem" />
      <Icon as={BsChevronDoubleRight} fontSize="7rem" />
      <Icon as={BsChevronDoubleRight} fontSize="7rem" />
    </HStack>
  );
};

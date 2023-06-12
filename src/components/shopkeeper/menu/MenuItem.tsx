import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { semanticColors } from "../../../styles/semanticColor";

interface IMenu {
  name: string;
  price: number;
  menuDescription: string;
}

const MenuItem = ({ name, price, menuDescription }: IMenu) => {
  return (
    <Box w="full" h="100px" borderBottom="1px" borderColor="gray.3">
      <Box float="left" mt="5px">
        <Image boxSize="88px" objectFit="cover" src="" alt="Burger" />
      </Box>
      <Box float="left" mt="18px" ml="15px">
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text fontSize="sm" mt="3px">
          {menuDescription}
        </Text>
      </Box>
      <Box float="right" mt="32px">
        <Button size="sm">수정</Button>
      </Box>
      <Box float="right">
        <Heading
          as="h4"
          size="lg"
          color={semanticColors.primary}
          lineHeight="100px"
          mr="30px"
        >
          {price.toLocaleString()}원
        </Heading>
      </Box>
    </Box>
  );
};

export default MenuItem;

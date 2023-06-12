import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MiniTable = () => {
  return (
    <Box w="full" py="10px">
      <Box w="40%" float="left">
        <Text fontSize="sm" color="gray.6">
          메뉴
        </Text>
      </Box>
      <Box w="25%" float="left" textAlign="center">
        <Text fontSize="sm" color="gray.6">
          총 가격
        </Text>
      </Box>
      <Box w="15%" float="left" textAlign="center">
        <Text fontSize="sm" color="gray.6">
          실제 결제 가격
        </Text>
      </Box>
      <Box w="20%" float="left">
        <Text fontSize="sm" color="gray.6">
          주문상태
        </Text>
      </Box>
    </Box>
  );
};

export default MiniTable;

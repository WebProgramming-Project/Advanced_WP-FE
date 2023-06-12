import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MiniTable = () => {
  return (
    <Box w="full" py="10px">
      <Box w="75%" float="left">
        <Text fontSize="sm" color="gray.6">
          메뉴
        </Text>
      </Box>
      <Box w="25%" float="left">
        <Text fontSize="sm" color="gray.6">
          적용된 정책
        </Text>
      </Box>
    </Box>
  );
};

export default MiniTable;

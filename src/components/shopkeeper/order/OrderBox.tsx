import React from "react";
import { Box } from "@chakra-ui/react";
import OrderItem from "./OrderItem";

const OrderBox = (): JSX.Element => {
  return (
    <Box w="full" border="1px" borderColor="gray.4" borderRadius="5" mt="10px">
      <OrderItem />
    </Box>
  );
};

export default OrderBox;

import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { semanticColors } from "../../styles";
import { BsArrowRight } from "react-icons/bs";

interface ListItemProps {
  id: number;
  menuNames: string[];
  totalPrice: number;
  discountPrice?: number;
  orderStatus: string;
}

export const ListItem = ({
  id,
  menuNames,
  totalPrice,
  discountPrice,
  orderStatus,
}: ListItemProps) => {
  return (
    <Flex
      alignItems="center"
      h="fit-content"
      px="4rem"
      borderBottom="1px solid"
      borderColor={semanticColors.primary}
    >
      <Text w="8rem" fontSize="1.25rem" textAlign="center">
        {id}
      </Text>
      <Box w="45rem" ml="1rem" fontSize="1.25rem">
        {menuNames.map((v) => (
          <Text key={v} py="0.1rem">
            {v}
          </Text>
        ))}
      </Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w="5rem"
        fontSize="1.25rem"
      >
        <Text
          textDecoration={discountPrice ? "line-through" : "none"}
          color={discountPrice ? "gray.4" : "gray.7"}
        >
          {totalPrice}
        </Text>
        {discountPrice && (
          <Flex alignItems="center">
            <Icon as={BsArrowRight} />
            <Text>{discountPrice}</Text>
          </Flex>
        )}
      </Flex>
      <Text w="7.25rem" fontSize="1.25rem" ml="5rem" textAlign="center">
        {orderStatus}
      </Text>
    </Flex>
  );
};

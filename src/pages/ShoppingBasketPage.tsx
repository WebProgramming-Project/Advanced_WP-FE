import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { semanticColors } from "../styles";
import { BsCart2 } from "react-icons/bs";

export const ShoppingBasketPage = () => {
  return (
    <Box w="full">
      <Flex mt="2rem" px="2rem" color={semanticColors.primary}>
        <Icon as={BsCart2} fontSize="3rem" mr="0.75rem" />
        <Heading>장바구니</Heading>
      </Flex>
      <Divider
        w="full"
        mt="4px"
        border="1px solid"
        borderColor={semanticColors.primary}
      />
      <Table size="lg">
        <Thead>
          <Tr>
            <Th fontSize="1.25rem" textAlign="center">
              <Checkbox></Checkbox>
            </Th>
            <Th fontSize="1.25rem" textAlign="center">
              제품
            </Th>
            <Th fontSize="1.25rem" textAlign="center">
              수량
            </Th>
            <Th fontSize="1.25rem" textAlign="center">
              가격
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr fontSize="xl">
            <Td textAlign="center">
              <Checkbox></Checkbox>
            </Td>
            <Td textAlign="center">싸이버거</Td>
            <Td textAlign="center">
              <NumberInput
                w="10rem"
                mx="auto"
                display="flex"
                size="sm"
                defaultValue={1}
                min={1}
              >
                <NumberDecrementStepper
                  children="-"
                  border="1px solid"
                  borderColor="gray.6"
                  borderRadius="0"
                  fontSize="1rem"
                  _hover={{ bgColor: "gray.3" }}
                />
                <NumberInputField
                  w="6rem"
                  border="1px solid"
                  borderColor="gray.4"
                  borderRadius="0"
                  textAlign="center"
                />
                <NumberIncrementStepper
                  children="+"
                  border="1px solid"
                  borderColor="gray.4"
                  borderRadius="0"
                  fontSize="1rem"
                  _hover={{ bgColor: "gray.3" }}
                />
              </NumberInput>
            </Td>
            <Td textAlign="center" color={semanticColors.primary}>
              5,600원
            </Td>
          </Tr>
        </Tbody>
        <Tfoot borderY="2px solid" borderColor={semanticColors.primary}>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th textAlign="center" fontSize="xl" color={semanticColors.primary}>
              5,600원
            </Th>
          </Tr>
        </Tfoot>
      </Table>
      <Flex alignItems="center" justifyContent="flex-end" mt="1rem">
        <Button variant="danger">삭제</Button>
        <Button variant="primary" ml="1rem">
          주문하기
        </Button>
      </Flex>
    </Box>
  );
};

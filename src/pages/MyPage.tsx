import {
  Box,
  Checkbox,
  Circle,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  BsBasket,
  BsBicycle,
  BsChevronDoubleRight,
  BsCupStraw,
  BsListUl,
  BsTruck,
} from "react-icons/bs";
import { semanticColors } from "../styles";
import { orderData } from "../assets/data/data";

export const MyPage = () => {
  const data = orderData.order;

  return (
    <Box w="full" py="3rem">
      <Box>
        <Flex px="2rem" color={semanticColors.primary}>
          <Icon as={BsListUl} fontSize="3rem" mr="0.75rem" />
          <Heading>주문내역</Heading>
        </Flex>
        <Table
          size="lg"
          mt="2rem"
          borderY="1px solid"
          borderColor={semanticColors.primary}
        >
          <Thead>
            <Tr borderBottom="1px solid" borderColor="yellow.5">
              <Th border="0" fontSize="1.25rem">
                <Checkbox></Checkbox>
              </Th>
              <Th border="0" fontSize="1.25rem">
                주문일자
              </Th>
              <Th border="0" fontSize="1.25rem">
                제품
              </Th>
              <Th border="0" fontSize="1.25rem">
                수량
              </Th>
              <Th border="0" fontSize="1.25rem">
                가격
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* {data.map((item) => {
              item.menus.map((menu, index) => (
                <Tr key={index}>
                  {index === 0 ? <Checkbox></Checkbox> : <Td></Td>}
                  {index === 0 ? <Td>{item.orderDate}</Td> : <Td></Td>}
                  <Td>
                    <Flex>
                      <Image src={menu.imgSrc} alt={menu.menu} />
                      <Text>{menu.menu}</Text>
                    </Flex>
                  </Td>
                </Tr>
              ));
            })} */}
            <Tr>
              <Td>
                <Checkbox></Checkbox>
              </Td>
              <Td>23/05/02</Td>
              <Td>
                <Flex>
                  <Image src="" />
                  <Text>싸이버거 세트</Text>
                </Flex>
              </Td>
              <Td>
                <NumberInput
                  display="flex"
                  w="5rem"
                  size="sm"
                  defaultValue={1}
                  min={1}
                >
                  <NumberDecrementStepper
                    children="-"
                    border="1px solid"
                    borderColor="gray.6"
                    borderRadius="0"
                    _hover={{ bgColor: "gray.3" }}
                  />
                  <NumberInputField
                    w="4rem"
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
                    _hover={{ bgColor: "gray.3" }}
                  />
                </NumberInput>
              </Td>
              <Td>5,600원</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td pl="4rem">
                <Flex>
                  <Image src="" />
                  <Text>케이준양념감자</Text>
                </Flex>
              </Td>
              <Td>
                <NumberInput
                  display="flex"
                  w="5rem"
                  size="sm"
                  defaultValue={1}
                  min={1}
                  isDisabled
                >
                  <NumberDecrementStepper
                    children="-"
                    border="1px solid"
                    borderColor="gray.6"
                    borderRadius="0"
                    _hover={{ bgColor: "gray.3" }}
                  />
                  <NumberInputField
                    w="4rem"
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
                    _hover={{ bgColor: "gray.3" }}
                  />
                </NumberInput>
              </Td>
              <Td>0원</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td pl="4rem">
                <Flex>
                  <Image src="" />
                  <Text>콜라</Text>
                </Flex>
              </Td>
              <Td>
                <NumberInput
                  display="flex"
                  w="5rem"
                  size="sm"
                  defaultValue={1}
                  min={1}
                  isDisabled
                >
                  <NumberDecrementStepper
                    children="-"
                    border="1px solid"
                    borderColor="gray.6"
                    borderRadius="0"
                    _hover={{ bgColor: "gray.3" }}
                  />
                  <NumberInputField
                    w="4rem"
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
                    _hover={{ bgColor: "gray.3" }}
                  />
                </NumberInput>
              </Td>
              <Td>0원</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt="5rem">
        <Flex px="2rem" color={semanticColors.primary}>
          <Icon as={BsTruck} fontSize="3rem" mr="0.75rem" />
          <Heading>주문내역</Heading>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mt="2rem">
          <Circle size="10rem" bgColor={semanticColors.primary}>
            <Icon as={BsBasket} fontSize="7rem" color="white" />
          </Circle>
          <HStack spacing="-2.5rem" color="yellow.5">
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
          </HStack>
          <Circle size="10rem" bgColor={semanticColors.primary}>
            <Icon as={BsBicycle} fontSize="7rem" color="white" />
          </Circle>
          <HStack spacing="-2.5rem" color="yellow.5">
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
            <Icon as={BsChevronDoubleRight} fontSize="7rem" />
          </HStack>
          <Circle size="10rem" bgColor={semanticColors.primary}>
            <Icon as={BsCupStraw} fontSize="7rem" color="white" />
          </Circle>
        </Flex>
      </Box>
    </Box>
  );
};

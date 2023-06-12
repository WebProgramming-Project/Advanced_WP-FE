import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  Image,
  Text,
  useDisclosure,
  CheckboxGroup,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { semanticColors } from "../../styles";
import { Menu, MenuOption } from "@types";
import { useEffect, useState } from "react";
import { usePostOrderBasket } from "../../react-query/useOrder";
import { useRecoilValue } from "recoil";
import { storeInfoState } from "../../store/store";
import potato from "../../assets/img/감튀.png";
import cola from "../../assets/img/콜라.png";

interface ShoppingItemAddProps {
  menuId: number;
  title: string;
  price: number;
  optionList: MenuOption[];
  sideList: Menu[];
  activeBtn: string;
  setActiveBtn: (value: string) => void;
}

export const ShoppingItemAdd = ({
  menuId,
  title,
  price,
  optionList,
  sideList,
  activeBtn,
  setActiveBtn,
}: ShoppingItemAddProps) => {
  const { mutate, isLoading } = usePostOrderBasket();
  const getStoreInfo = useRecoilValue(storeInfoState);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceCount, setPriceCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(1);
  const [side1, setSide1] = useState<number>(0);
  const [side2, setSide2] = useState<number>(0);
  const [options, setOptions] = useState<MenuOption[]>([]);

  useEffect(() => {
    let optionPrice = 0;
    options.map((option) => (optionPrice += option.menuOptionPrice));

    if (activeBtn === "sigle") {
      setPriceCount(price * number + side1 * 1000 + side2 * 1500 + optionPrice);
    } else if (activeBtn === "set") {
      setPriceCount(price + 2000 + side1 * 1000 + side2 * 1500 + optionPrice);
    }
  }, [activeBtn, price, number, side1, side2, options]);

  const onClick = () => {
    const optionArr = options.map((option) => option.menuOptionId);

    if (activeBtn === "set") {
      const setId =
        optionList.find((option) => option.menuOptionName === "세트 추가")
          ?.menuOptionId || 4003;

      optionArr.push(setId);
    }

    mutate(
      {
        storeId: getStoreInfo.storeId,
        menuId: menuId,
        count: number,
        menuOptionIds: optionArr,
      },
      {
        onSuccess: () => {
          onClose();
          setNumber(1);
          setSide1(0);
          setSide2(0);
          setOptions([]);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <Box>
      <Button variant="primary" onClick={onOpen}>
        장바구니 담기
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>장바구니 담기</ModalHeader>
          <ModalBody>
            <Box mb="1rem">
              <Heading size="md">버거 선택</Heading>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="0.75rem"
              >
                <Button
                  w="49%"
                  variant={activeBtn === "sigle" ? "primary" : "solid"}
                  onClick={() => setActiveBtn("sigle")}
                >
                  {title} 단품
                </Button>
                <Button
                  w="49%"
                  variant={activeBtn === "set" ? "primary" : "solid"}
                  onClick={() => setActiveBtn("set")}
                >
                  {title} 세트
                </Button>
              </Flex>
              <NumberInput
                display="flex"
                size="md"
                defaultValue={1}
                min={1}
                value={number}
                onChange={(value) => setNumber(Number(value))}
              >
                <NumberDecrementStepper
                  children="-"
                  border="1px solid"
                  borderColor="gray.6"
                  borderRadius="0"
                  fontSize="1.5rem"
                  _hover={{ bgColor: "gray.3" }}
                />
                <NumberInputField
                  w="18rem"
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
                  fontSize="1.5rem"
                  _hover={{ bgColor: "gray.3" }}
                />
              </NumberInput>
            </Box>
            <Divider my="1rem" />
            <CheckboxGroup>
              <HStack spacing="1rem">
                {optionList.map(
                  (option) =>
                    option.menuOptionName !== "세트 추가" && (
                      <Checkbox
                        value={option.menuOptionName}
                        isDisabled={activeBtn === ""}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setOptions([...options, option]);
                          } else {
                            setOptions(
                              options.filter(
                                (item) =>
                                  item.menuOptionId !== option.menuOptionId
                              )
                            );
                          }
                        }}
                      >
                        {option.menuOptionName} +{option.menuOptionPrice}원
                      </Checkbox>
                    )
                )}
              </HStack>
            </CheckboxGroup>
            <Divider my="1rem" />
            <Box>
              <Heading size="md">사이드 선택</Heading>
              <Flex
                alignItems="center"
                borderBottom="1px solid"
                borderColor="gray.3"
                py="0.5rem"
                justifyContent="space-between"
              >
                <Flex alignItems="center">
                  <Image
                    src={potato}
                    alt="감자튀김"
                    boxSize="4rem"
                    border="1px solid"
                    borderColor="gray.3"
                  />
                  <Text px="0.5rem">케이준양념감자</Text>
                </Flex>

                <Flex alignItems="center">
                  <NumberInput
                    display="flex"
                    size="md"
                    defaultValue={0}
                    min={0}
                    borderRadius="4px"
                    value={side1}
                    onChange={(value) => setSide1(Number(value))}
                    isDisabled={activeBtn === ""}
                  >
                    <NumberDecrementStepper
                      children="-"
                      border="1px solid"
                      borderColor="gray.6"
                      fontSize="1rem"
                      w="2.5rem"
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
                      borderColor="gray.5"
                      _hover={{ bgColor: "gray.3" }}
                    />
                  </NumberInput>
                </Flex>
              </Flex>
              <Flex
                alignItems="center"
                borderBottom="1px solid"
                borderColor="gray.3"
                py="0.5rem"
                justifyContent="space-between"
              >
                <Flex alignItems="center">
                  <Image
                    src={cola}
                    alt="콜라"
                    boxSize="4rem"
                    border="1px solid"
                    borderColor="gray.3"
                  />
                  <Text px="0.5rem">콜라</Text>
                </Flex>

                <Flex alignItems="center">
                  <NumberInput
                    display="flex"
                    size="md"
                    defaultValue={0}
                    min={0}
                    borderRadius="4px"
                    value={side2}
                    onChange={(value) => setSide2(Number(value))}
                    isDisabled={activeBtn === ""}
                  >
                    <NumberDecrementStepper
                      children="-"
                      border="1px solid"
                      borderColor="gray.6"
                      fontSize="1rem"
                      w="2.5rem"
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
                      borderColor="gray.5"
                      _hover={{ bgColor: "gray.3" }}
                    />
                  </NumberInput>
                </Flex>
              </Flex>
            </Box>

            <Flex alignItems="center" justifyContent="space-between" mt="2rem">
              <Heading size="md">총 금액</Heading>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={semanticColors.primary}
              >
                {priceCount}원
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              취소
            </Button>
            <Button
              variant="primary"
              onClick={onClick}
              isLoading={isLoading}
              loadingText="담는 중"
            >
              장바구니 담기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

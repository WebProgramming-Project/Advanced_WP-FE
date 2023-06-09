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
} from "@chakra-ui/react";
import cola from "../../assets/img/콜라.png";
import potato from "../../assets/img/감튀.png";
import { semanticColors } from "../../styles";

interface ShoppingItemAddProps {
  title: string;
  activeBtn: string;
  setActiveBtn: (value: string) => void;
}

export const ShoppingItemAdd = ({
  title,
  activeBtn,
  setActiveBtn,
}: ShoppingItemAddProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <NumberInput display="flex" size="md" defaultValue={1} min={1}>
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
                1,000원
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              취소
            </Button>
            <Button variant="primary">장바구니 담기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

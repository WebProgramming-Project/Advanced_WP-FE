import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import burger from "../../../assets/img/마라싸이버거.png";
import { semanticColors } from "../../../styles/semanticColor";
import axios from "axios";
import noImage from "../../../assets/img/noImage.jpeg";

interface IMenu {
  id: number;
  name: string;
  price: number;
  menuDescription: string;
  discountPolicy: string;
  image: string;
}

const PolicyItem = ({
  id,
  name,
  price,
  menuDescription,
  discountPolicy,
  image,
}: IMenu): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [policy, setPolicy] = React.useState(discountPolicy);

  const policyToString = (policy: string): string => {
    let result = "";

    if (policy === "NONE") {
      result = "할인정책없음";
    } else if (policy === "AMOUNT") {
      result = "정량 할인 정책";
    } else if (policy === "PERCENT") {
      result = "정률 할인 정책";
    } else if (policy === "MORNING") {
      result = "조조 할인 정책";
    } else {
      result = "Error";
    }
    return result;
  };

  const changePolicy = async (value: string) => {
    setPolicy(value);

    const menuInfo = {
      name: name,
      price: price,
      description: menuDescription,
      discountPolicy: value,
      image: image,
    };

    const data = JSON.stringify(menuInfo);
    console.log(data);

    await axios({
      method: "PUT",
      url: process.env.REACT_APP_API_ENDPOINT + "menus/" + id, //환경변수
      data,
      headers: { "Content-Type": `application/json` },
    });
  };

  return (
    <>
      <Box
        w="full"
        h="100px"
        border="1px"
        borderColor="gray.3"
        mt="20px"
        borderRadius="5px"
      >
        <Box w="75%" float="left">
          <Image
            boxSize="80px"
            objectFit="cover"
            src={image ? image : noImage}
            alt="Burger"
            float="left"
            mt="10px"
            ml="10px"
          />
          <Box float="left" mt="18px" ml="15px">
            <Heading as="h4" size="md">
              {name}
            </Heading>
            <Text fontSize="sm" mt="3px">
              {menuDescription.length > 54
                ? (menuDescription = menuDescription.slice(0, 55) + "...")
                : menuDescription}
            </Text>
          </Box>
          <Heading
            float="right"
            as="h4"
            size="lg"
            color={semanticColors.primary}
            lineHeight="100px"
            mr="30px"
          >
            {price.toLocaleString()}원
          </Heading>
        </Box>
        <Box float="left" w="25%">
          <Text fontSize="sm" lineHeight="100px" ml="2px" float="left">
            {policyToString(policy)}
          </Text>
          <Button
            variant="primary"
            float="right"
            fontSize="14px"
            mr="10px"
            mt="30px"
            onClick={onOpen}
          >
            정책변경
          </Button>
        </Box>
      </Box>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정책 변경</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="full" padding="10px">
              <RadioGroup onChange={changePolicy} value={policy}>
                <Box
                  w="full"
                  mt="10px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="NONE" w="full">
                    할인정책없음
                  </Radio>
                </Box>
                <Box
                  w="full"
                  mt="10px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="AMOUNT" w="full">
                    정량 할인 정책: 주문 총 금액이 10000원 이상일 때 1000원 할인
                  </Radio>
                </Box>
                <Box
                  w="full"
                  mt="10px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="PERCENT" w="full">
                    정률 할인 정책: 주문 총 금액이 15000원 이상일 때 10% 할인
                  </Radio>
                </Box>
                <Box
                  w="full"
                  mt="10px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="MORNING" w="full">
                    조조 할인: 오전 11시 이전 주문 시 1000원 할인
                  </Radio>
                </Box>
              </RadioGroup>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PolicyItem;

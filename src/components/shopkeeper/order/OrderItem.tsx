import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Burger from "../../../assets/img/마라싸이버거.png";

const OrderItem = (): JSX.Element => {
  const [status, SetStatus] = useState<string>("newOrder");

  return (
    <>
      <Box w="full" height="80px">
        <Box w="35%" float="left">
          <Image
            boxSize="60px"
            objectFit="cover"
            src={Burger}
            alt="Burger"
            float="left"
            mt="10px"
            ml="10px"
          />
          <Heading as="h4" size="md" lineHeight="80px" ml="10px" float="left">
            싸이버거 세트(케이준양념감자, 콜라)
          </Heading>
        </Box>
        <Box w="5%" float="left">
          <Heading as="h4" textAlign="center" size="md" lineHeight="80px">
            1 개
          </Heading>
        </Box>

        <Box w="25%" float="left">
          <Text
            fontSize="sm"
            lineHeight="80px"
            color="gray.6"
            textAlign="center"
          >
            경북 구미시 대학로 61길 디지털관 337호
          </Text>
        </Box>
        <Box w="15%" float="left">
          <Heading
            as="h4"
            textAlign="center"
            size="md"
            lineHeight="80px"
            color="yellow.7"
          >
            56,000원
          </Heading>
        </Box>
        <Box w="5%" float="left">
          <Text fontSize="sm" lineHeight="80px" textAlign="center">
            주문 접수
          </Text>
        </Box>
        <Box w="15%" float="left" textAlign="center">
          <ButtonGroup mt="20px">
            <Button variant="primary">수락</Button>
            <Button variant="danger">거절</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default OrderItem;

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
import {
  usePostAccept,
  usePostComplete,
  usePostCancel,
} from "../../../react-query/useOrder";

const OrderItem = ({ data }: any): JSX.Element => {
  const [status, setStatus] = useState<string>(data.orderStatus);

  const toComplete = () => {
    usePostComplete(data.orderId);
    setStatus("COMPLETE");
  };

  const toAccpet = () => {
    usePostAccept(data.orderId);
    setStatus("DELIVERY");
  };

  const toCancel = () => {
    usePostCancel(data.orderId);
    setStatus("CANCEL");
  };

  const state = (status: string) => {
    if (status == "ORDER") {
      return (
        <>
          <Button variant="primary" onClick={toAccpet}>
            수락
          </Button>
          <Button variant="danger" onClick={toCancel}>
            거절
          </Button>
        </>
      );
    } else if (status == "DELIVERY") {
      return (
        <>
          <Button variant="primary" onClick={toComplete}>
            배달완료
          </Button>
        </>
      );
    } else {
      <></>;
    }
  };

  const stateusToString = (status: string): string => {
    let result = "";

    if (status === "ORDER") {
      result = "주문";
    } else if (status === "DELIVERY") {
      result = "배달중";
    } else if (status === "COMPLETE") {
      result = "배달완료";
    } else if (status === "CANCEL") {
      result = "주문취소";
    } else {
      result = "에러";
    }

    return result;
  };

  return (
    <>
      <Box
        w="full"
        minHeight="80px"
        border="1px"
        borderColor="gray.4"
        borderRadius="5"
        mt="10px"
        display="flex"
        alignItems="center"
      >
        {/* 이거 map으로 돌려야함 */}
        <Box w="40%">
          {data.orderItems.map((item: any) => (
            <>
              <Box display="flex">
                <Image
                  boxSize="60px"
                  objectFit="cover"
                  src={Burger}
                  alt="Burger"
                  float="left"
                  mt="10px"
                  ml="10px"
                />
                <Heading
                  as="h4"
                  size="md"
                  lineHeight="80px"
                  ml="10px"
                  float="left"
                  w="70%"
                >
                  {item.menu.menuName}
                </Heading>
                <Heading as="h4" textAlign="right" size="md" lineHeight="80px">
                  {item.count}개
                </Heading>
              </Box>
            </>
          ))}
        </Box>

        <Box w="25%" float="left">
          <Text
            fontSize="md"
            lineHeight="80px"
            color="gray.6"
            textAlign="center"
          >
            {data.totalPrice.toLocaleString()}원
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
            {data.discountPrice.toLocaleString()}원
          </Heading>
        </Box>
        <Box w="5%" float="left">
          <Text fontSize="sm" lineHeight="80px" textAlign="center">
            {stateusToString(status)}
          </Text>
        </Box>
        <Box w="15%" float="left" textAlign="center">
          <ButtonGroup mt="20px">{state(status)}</ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default OrderItem;

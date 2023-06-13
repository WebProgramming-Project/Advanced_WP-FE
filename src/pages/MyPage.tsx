import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  BsBasket,
  BsBicycle,
  BsCupStraw,
  BsListUl,
  BsTruck,
} from "react-icons/bs";
import { semanticColors } from "../styles";
import { useGetAllOrderList } from "../react-query/useOrder";
import { useEffect, useRef, useState } from "react";
import { OrderSummaryInfo } from "@types";
import { curentOrderStauts, toOrderList } from "../utils/orderUtil";
import { ListItem } from "../components/order/ListItem";
import { Arrow } from "../components/basket/Arrow";

export const MyPage = () => {
  const { data: myOrderList } = useGetAllOrderList();

  const [orderList, setOrderList] = useState<OrderSummaryInfo[]>([]);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [orderingId, setOrderingId] = useState<number>(0);
  const [orderStatus, setOrderStatus] = useState<number>(0);

  useEffect(() => {
    if (!myOrderList) return;

    const orderArr = myOrderList.map((order) => toOrderList(order));
    setOrderList(orderArr);
    setOrderingId(
      myOrderList.find((order) => order.orderStatus === "ORDER")?.orderId ||
        (orderArr.length > 0 && orderArr[0].orderId) ||
        0
    );
  }, [myOrderList]);

  const webSocketUrl = `ws://localhost/ws/customer`;
  const ws = useRef<WebSocket>();

  useEffect(() => {
    if (orderingId === 0) return;

    console.log("hi");

    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      ws.current.onclose = () => {
        console.log("disconnected to " + webSocketUrl);
        setSocketConnected(false);
      };
      ws.current.onerror = (err) => {
        console.log(err);
      };
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        setOrderStatus(curentOrderStauts(data.status));
        console.log(data);
      };
    }

    return () => {
      ws.current?.close();
    };
  }, [orderingId]);

  useEffect(() => {
    if (orderingId === 0) return;

    if (socketConnected) {
      ws.current?.send(
        JSON.stringify({ type: "ENTER", status: null, orderId: orderingId })
      );
    }
  }, [socketConnected, orderingId]);

  return (
    <Box w="full" py="3rem">
      <Box>
        <Flex px="2rem" color={semanticColors.primary}>
          <Icon as={BsListUl} fontSize="3rem" mr="0.75rem" />
          <Heading>주문내역</Heading>
        </Flex>
        <Divider border="1px solid" borderColor={semanticColors.primary} />
        <Box>
          <Flex
            alignItems="center"
            h="3rem"
            px="4rem"
            borderBottom="1px solid"
            borderColor={semanticColors.primary}
          >
            <Text w="8rem" fontSize="1.5rem" textAlign="center">
              주문번호
            </Text>
            <Text w="45rem" ml="1rem" fontSize="1.5rem">
              메뉴
            </Text>
            <Text w="5rem" fontSize="1.5rem" textAlign="center">
              가격
            </Text>
            <Text w="7.5rem" fontSize="1.5rem" ml="5rem" textAlign="center">
              주문 상태
            </Text>
          </Flex>
          {orderList.map((order) => (
            <ListItem
              key={order.orderId}
              id={order.orderId}
              menuNames={order.menuNames}
              totalPrice={order.totalPrice}
              discountPrice={
                order.discountPrice === order.totalPrice
                  ? undefined
                  : order.discountPrice
              }
              orderStatus={order.orderStatus}
            />
          ))}
          {orderList.length === 0 && (
            <Flex
              alignItems="center"
              justifyContent="center"
              w="full"
              h="20rem"
              border="1px solid"
              borderColor="yellow.5"
            >
              <Text fontSize="2xl" color="yellow.7">
                주문 내역이 없습니다.
              </Text>
            </Flex>
          )}
        </Box>
      </Box>

      <Box mt="5rem">
        <Flex px="2rem" color={semanticColors.primary}>
          <Icon as={BsTruck} fontSize="3rem" mr="0.75rem" />
          <Heading>주문내역</Heading>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box pt="2rem">
            <Circle
              size="10rem"
              bgColor={orderStatus > 0 ? semanticColors.primary : "gray.5"}
            >
              <Icon as={BsBasket} fontSize="7rem" color="white" />
            </Circle>
            <Heading
              fontSize="2xl"
              mt="1rem"
              textAlign="center"
              borderColor="white"
            >
              주문 중
            </Heading>
          </Box>
          <Arrow color={orderStatus > 0 ? "yellow.5" : undefined} />
          <Box pt="2rem">
            <Circle
              size="10rem"
              bgColor={orderStatus > 1 ? semanticColors.primary : "gray.5"}
            >
              <Icon as={BsBicycle} fontSize="7rem" color="white" />
            </Circle>
            <Heading
              fontSize="2xl"
              mt="1rem"
              textAlign="center"
              borderColor="white"
            >
              배달 중
            </Heading>
          </Box>
          <Arrow color={orderStatus > 1 ? "yellow.5" : undefined} />
          <Box pt="2rem">
            <Circle
              size="10rem"
              bgColor={orderStatus > 2 ? semanticColors.primary : "gray.5"}
            >
              <Icon as={BsCupStraw} fontSize="7rem" color="white" />
            </Circle>
            <Heading fontSize="2xl" mt="1rem" textAlign="center">
              배달 완료
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

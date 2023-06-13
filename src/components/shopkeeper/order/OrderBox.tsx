import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import OrderItem from "./OrderItem";

const OrderBox = (): JSX.Element => {
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);

  const webSocketUrl = `ws://localhost/ws/orders`;
  const ws = useRef<WebSocket>();

  // 소켓 객체 생성
  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      ws.current.onclose = (error) => {
        console.log("disconnect from " + webSocketUrl);
        console.log(error);
      };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);

        setItems(data.orders);
      };
    }
  }, []);

  // // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected) {
      ws.current?.send(
        JSON.stringify({
          type: "ENTER",
          storeId: 1000,
          orders: null,
        })
      );

      setSendMsg(true);
    }
  }, [socketConnected]);

  return (
    <Box w="full">
      {items.map((items) => {
        return <OrderItem data={items} />;
      })}
    </Box>
  );
};

export default OrderBox;

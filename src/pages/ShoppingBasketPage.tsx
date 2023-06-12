import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { semanticColors } from "../styles";
import { BsCart2 } from "react-icons/bs";
import {
  useDeleteOrder,
  useGetOrderBasket,
  usePostOrder,
} from "../react-query/useOrder";
import { OrderBasketList } from "@types";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { storeInfoState } from "../store/store";
import { Item } from "../components/basket/Item";

export const ShoppingBasketPage = () => {
  const { data, refetch } = useGetOrderBasket();
  const { mutate } = usePostOrder();
  const { mutate: mutateDelete } = useDeleteOrder();

  const storeInfo = useRecoilValue(storeInfoState);

  const [basketList, setBasketList] = useState<OrderBasketList[]>([]);
  const [checkedList, setCheckedList] = useState<number[]>([]);

  useEffect(() => {
    if (!data) return;

    setBasketList(data);
  }, [data]);

  const onClick = () => {
    mutate(
      {
        storeId: storeInfo.storeId,
        orderItemIds: checkedList,
      },
      {
        onSuccess: () => {
          refetch();
          setCheckedList([]);
        },
      }
    );
  };

  const onDeleteItem = () => {
    if (checkedList.length === 0) return alert("삭제할 메뉴를 선택해주세요");
    if (checkedList.length > 1) return alert("한개씩만 삭제 가능합니다.");

    mutateDelete(checkedList[0], {
      onSuccess: () => {
        setCheckedList([]);
      },
    });
  };

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
      <Box>
        <Flex
          alignItems="center"
          h="3rem"
          px="3rem"
          borderBottom="1px solid"
          borderColor={semanticColors.primary}
        >
          <Checkbox
            onChange={(e) =>
              e.target.checked
                ? setCheckedList(basketList.map((v) => v.orderItemId))
                : setCheckedList([])
            }
          ></Checkbox>
          <Flex w="45rem" ml="3rem" alignItems="end">
            <Text fontSize="1.5rem">메뉴</Text>
            <Text fontSize="0.75rem">option</Text>
          </Flex>
          <Text w="5rem" fontSize="1.5rem" textAlign="center">
            수량
          </Text>
          <Text w="5rem" fontSize="1.5rem" ml="3.5rem" textAlign="center">
            가격
          </Text>
        </Flex>
        {basketList.map((item) => (
          <Item
            key={item.orderItemId}
            chekedList={checkedList}
            setCheckedList={setCheckedList}
            orderItemId={item.orderItemId}
            name={item.menu.menuName}
            option={item.menuOptions}
            quantity={item.count}
            price={item.price * item.count}
          />
        ))}
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          px="3rem"
          borderY="1px solid"
          borderColor={semanticColors.primary}
        >
          <Text w="5rem" fontSize="1.5rem" mr="5.5rem" textAlign="center">
            {basketList.reduce((acc, cur) => acc + cur.price * cur.count, 0)}
          </Text>
        </Flex>
      </Box>
      <Flex alignItems="center" justifyContent="flex-end" mt="1rem">
        <Button variant="danger" onClick={onDeleteItem}>
          삭제
        </Button>
        <Button variant="primary" ml="1rem" onClick={onClick}>
          주문하기
        </Button>
      </Flex>
    </Box>
  );
};

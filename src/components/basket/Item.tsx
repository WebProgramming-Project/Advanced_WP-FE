import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { semanticColors } from "../../styles";
import { MenuOption } from "@types";

interface ItemProps {
  chekedList: number[];
  setCheckedList: (checkedList: number[]) => void;
  orderItemId: number;
  name: string;
  option: MenuOption[];
  quantity: number;
  price: number;
}

export const Item = ({
  chekedList,
  setCheckedList,
  orderItemId,
  name,
  option,
  quantity,
  price,
}: ItemProps) => {
  return (
    <Flex
      alignItems="center"
      px="3rem"
      borderBottom="1px solid"
      borderColor={semanticColors.primary}
    >
      <Checkbox
        isChecked={chekedList.includes(orderItemId)}
        onChange={(e) =>
          e.target.checked
            ? setCheckedList([...chekedList, orderItemId])
            : setCheckedList(chekedList.filter((v) => v !== orderItemId))
        }
      ></Checkbox>
      <Flex
        w="45rem"
        ml="3rem"
        alignItems="end"
        whiteSpace="nowrap"
        overflow="scroll"
      >
        <Text fontSize="1.5rem">{name}</Text>
        <Text fontSize="0.75rem">{option.map((v) => v.menuOptionName)}</Text>
      </Flex>
      <Text w="5rem" fontSize="1.5rem" textAlign="center">
        {quantity}
      </Text>
      <Text w="5rem" fontSize="1.5rem" ml="3.5rem" textAlign="center">
        {price}
      </Text>
    </Flex>
  );
};

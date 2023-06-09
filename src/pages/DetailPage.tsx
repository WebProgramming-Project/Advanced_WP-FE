import { Box, Divider } from "@chakra-ui/react";
import { data } from "../assets/data/data";
import { useParams } from "react-router-dom";

import { MenuInfo, SetConfig, ShoppingItemAdd } from "../components/detail";
import { useState } from "react";

export const DetailPage = () => {
  const { id } = useParams();
  const item = data.menu.find((item) => item.id === Number(id));

  const [activeBtn, setActiveBtn] = useState<string>("");

  return (
    <Box w="full">
      <Box w="784px" mx="auto" py="3rem" textAlign="center">
        <MenuInfo
          title={item?.title || ""}
          imgSrc={item?.imgSrc || ""}
          description={item?.description || ""}
        />
        <SetConfig />
        <Divider my="2rem" borderColor="gray.5" />
        <ShoppingItemAdd
          title={item?.title || ""}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
      </Box>
    </Box>
  );
};

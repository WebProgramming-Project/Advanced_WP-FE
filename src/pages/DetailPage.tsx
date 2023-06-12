import { Box, Divider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { MenuInfo, SetConfig, ShoppingItemAdd } from "../components/detail";
import { useEffect, useState } from "react";
import { useGetMenuDetail } from "../react-query/useMenu";
import { MenuDetail } from "@types";

export const DetailPage = () => {
  const { id } = useParams();

  const { data } = useGetMenuDetail(Number(id));

  const [menu, setMenu] = useState<MenuDetail>();
  const [activeBtn, setActiveBtn] = useState<string>("");

  useEffect(() => {
    if (!data) return;

    setMenu(data);
  }, [data]);

  return (
    <Box w="full">
      <Box w="784px" mx="auto" py="3rem" textAlign="center">
        <MenuInfo
          title={menu?.menuName || ""}
          imgSrc={menu?.image || ""}
          description={menu?.menuDescription || ""}
        />
        <SetConfig />
        <Divider my="2rem" borderColor="gray.5" />
        <ShoppingItemAdd
          menuId={menu?.menuId || 0}
          title={menu?.menuName || ""}
          price={menu?.menuPrice || 0}
          optionList={menu?.menuOptionList || []}
          sideList={menu?.sideMenuList || []}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
      </Box>
    </Box>
  );
};

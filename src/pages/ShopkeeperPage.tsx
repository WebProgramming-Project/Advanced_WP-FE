import React from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { semanticColors } from "../styles/semanticColor";

import Title from "../components/shopkeeper/Title";
import AddMenu from "../components/shopkeeper/menu/AddMenu";
import OrderBox from "../components/shopkeeper/order/OrderBox";
import MiniTable from "../components/shopkeeper/policy/MiniTable";
import PolicyItem from "../components/shopkeeper/policy/PolicyItem";
import { MenuContainer } from "../components/shopkeeper/menu/MenuContainer";
import { GraphContainer } from "../components/shopkeeper/stat/GraphContainer";
import { PolicyContainer } from "../components/shopkeeper/policy/PolicyContainer";
const ShopkeeperPage = (): JSX.Element => {
  return (
    <Box w="full">
      <Tabs mt="50px" variant="unstyled">
        <TabList borderBottom=" solid 1px #e5e5e5">
          <Tab _selected={{ color: "white", bg: semanticColors.primary }}>
            메뉴
          </Tab>
          <Tab _selected={{ color: "white", bg: semanticColors.primary }}>
            주문 접수
          </Tab>
          <Tab _selected={{ color: "white", bg: semanticColors.primary }}>
            할인 설정
          </Tab>
          <Tab _selected={{ color: "white", bg: semanticColors.primary }}>
            통계
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* 메뉴 목록 */}
            <Title title="메뉴 목록" />
            <MenuContainer />
            <Title title="메뉴 등록" />
            <AddMenu />
          </TabPanel>
          <TabPanel>
            <Title title="주문 목록" />
            <OrderBox />
          </TabPanel>
          <TabPanel>
            <Title title="할인 설정" />
            <MiniTable />
            <PolicyContainer />
          </TabPanel>
          <TabPanel>
            <Title title="통계" />
            <GraphContainer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ShopkeeperPage;

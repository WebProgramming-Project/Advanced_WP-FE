import { Box } from "@chakra-ui/react";
import { useGetOrderStat } from "../../../react-query/useOrder";
import { useEffect, useState } from "react";
import { orderStat } from "../../../utils/orderUtil";
import { BarGraph } from "./BarGraph";

export const GraphContainer = () => {
  const { data } = useGetOrderStat();

  const [statData, setStatData] = useState<{ name: string; value: number }[]>(
    []
  );

  useEffect(() => {
    if (!data) return;

    setStatData(orderStat(data));
  }, [data]);

  return (
    <Box w="full" h="full">
      <BarGraph data={statData} />
    </Box>
  );
};

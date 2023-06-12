import { Box } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";
import { semanticColors } from "../../../styles";

interface BarGraphProps {
  data: { name: string; value: number }[];
}

export const BarGraph = ({ data }: BarGraphProps) => {
  return (
    <Box w="100%" h="35rem">
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="name"
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        padding={0.5}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[semanticColors.primary]}
        colorBy="indexValue"
        theme={{
          labels: {
            text: {
              fontSize: 20,
              fill: "#fff",
            },
          },
        }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "menu",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "판매량",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["brighter", 5]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
};

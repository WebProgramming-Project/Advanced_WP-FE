import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { semanticColors } from "../../styles";

interface MenuInfoProps {
  title: string;
  imgSrc: string;
  description: string;
}

export const MenuInfo = ({ title, imgSrc, description }: MenuInfoProps) => {
  return (
    <>
      <Box
        w="6rem"
        mx="auto"
        fontSize="xl"
        fontWeight="semibold"
        color="white"
        borderTopRadius="24px"
        bgColor={semanticColors.primary}
      >
        버거
      </Box>
      <Heading as="h2" size="lg" my="1rem">
        {title}
      </Heading>
      <Image
        src={`data:image/png;base64,${imgSrc}`}
        alt={title}
        boxSize="16rem"
        mx="auto"
      />
      <Text my="1rem">{description}</Text>
      <Flex
        w="20rem"
        mx="auto"
        fontSize="md"
        borderBottomRadius="24px"
        color="white"
        alignItems="center"
        justifyContent="space-around"
        bgColor={semanticColors.primary}
      >
        <Box pl="4px">영양성분</Box>
        <Divider
          border="1px solid"
          height="1.5rem"
          borderColor="white"
          orientation="vertical"
        />
        <Box>알레르기 유발성분</Box>
        <Divider
          border="1px solid"
          height="1.5rem"
          borderColor="white"
          orientation="vertical"
        />
        <Box pr="4px">원산지</Box>
      </Flex>
    </>
  );
};

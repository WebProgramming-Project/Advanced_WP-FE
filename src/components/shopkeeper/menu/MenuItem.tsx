import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import burger from "../../../assets/img/1616055241-EYPWG.png";
import { semanticColors } from "../../../styles/semanticColor";

const MenuItem = (): JSX.Element => {
  return (
    <Box w="full" h="100px" borderBottom="1px" borderColor="gray.3">
      <Box float="left" mt="5px">
        <Image boxSize="88px" objectFit="cover" src={burger} alt="Burger" />
      </Box>
      <Box float="left" mt="18px" ml="15px">
        <Heading as="h4" size="md">
          탄두리 싸이버거
        </Heading>
        <Text fontSize="sm" mt="3px">
          인도식 탄두리소스와 크리미한 그위에르치즈소스, <br />
          싸이패티의 환상적인 조화
        </Text>
      </Box>
      <Box float="right" mt="32px">
        <Button colorScheme="red" size="sm" mr="10px">
          삭제
        </Button>
        <Button size="sm">수정</Button>
      </Box>
      <Box float="right">
        <Heading
          as="h4"
          size="lg"
          color={semanticColors.primary}
          lineHeight="100px"
          mr="30px"
        >
          26,000원
        </Heading>
      </Box>
    </Box>
  );
};

export default MenuItem;

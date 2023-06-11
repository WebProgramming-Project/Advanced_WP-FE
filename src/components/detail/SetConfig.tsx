import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";
import cola from "../../assets/img/콜라.png";
import potato from "../../assets/img/감튀.png";

export const SetConfig = () => {
  return (
    <Box mt="2rem">
      <Text fontWeight="semibold">세트구성</Text>
      <SimpleGrid columns={2} w="30rem" mx="auto">
        <Box p="1rem" w="full" border="1px solid" borderColor="gray.3">
          <Image src={potato} alt="감자튀김" mx="auto" boxSize="5rem" />
          <Text>케이준양념감자</Text>
        </Box>
        <Box p="1rem" w="full" border="1px solid" borderColor="gray.3">
          <Image src={cola} alt="콜라" mx="auto" boxSize="5rem" />
          <Text>콜라</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

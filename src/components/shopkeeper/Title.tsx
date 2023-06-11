import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle): JSX.Element => {
  return (
    <Box w="full" mt="30px">
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Box w="full" mt="10px" borderBottom="solid 1px #c8c8c8" />
    </Box>
  );
};

export default Title;

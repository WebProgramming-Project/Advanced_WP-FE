import React from "react";
import { Box, Image, Button, Input, Textarea } from "@chakra-ui/react";

const AddMenu = (): JSX.Element => {
  return (
    <Box w="full" mt="30px">
      <Box w="full">
        <Box w="160px" textAlign="center" float="left">
          <Image
            boxSize="160px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="addItem_Image"
          />
          <Input type="file" mt="10px" />
        </Box>
        <Box w="84%" float="left" ml="20px">
          <Input type="text" placeholder="제품명을 입력해주세요." />
          <Input
            type="text"
            placeholder="제품 가격을 입력해주세요."
            mt="10px"
          />
          <Textarea
            placeholder="제품설명을 입력하세요."
            resize="none"
            mt="10px"
          />
        </Box>
      </Box>
      <Box w="full">
        <Button float="right" size="sm" variant="primary" mt="10px">
          제품등록하기
        </Button>
      </Box>
    </Box>
  );
};

export default AddMenu;

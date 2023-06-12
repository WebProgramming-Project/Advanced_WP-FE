import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import burger from "../../../assets/img/마라싸이버거.png";
import { semanticColors } from "../../../styles/semanticColor";

const PolicyItem = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [policy, setPolicy] = React.useState("1");

  return (
    <>
      <Box
        w="full"
        h="100px"
        border="1px"
        borderColor="gray.3"
        mt="20px"
        borderRadius="5px"
      >
        <Box w="75%" float="left">
          <Image
            boxSize="80px"
            objectFit="cover"
            src={burger}
            alt="Burger"
            float="left"
            mt="10px"
            ml="10px"
          />
          <Box float="left" mt="18px" ml="15px">
            <Heading as="h4" size="md">
              탄두리 싸이버거
            </Heading>
            <Text fontSize="sm" mt="3px">
              인도식 탄두리소스와 크리미한 그위에르치즈소스, <br />
              싸이패티의 환상적인 조화
            </Text>
          </Box>
          <Heading
            float="right"
            as="h4"
            size="lg"
            color={semanticColors.primary}
            lineHeight="100px"
            mr="30px"
          >
            26,000원
          </Heading>
        </Box>
        <Box float="left" w="25%">
          <Text fontSize="sm" lineHeight="100px" ml="2px" float="left">
            {policy}
          </Text>
          <Button
            variant="primary"
            float="right"
            fontSize="14px"
            mr="10px"
            mt="30px"
            onClick={onOpen}
          >
            정책변경
          </Button>
        </Box>
      </Box>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정책 변경</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="full" padding="10px">
              <RadioGroup onChange={setPolicy} value={policy}>
                <Box
                  w="full"
                  mt="5px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="정책1" w="full">
                    정책1
                  </Radio>
                </Box>
                <Box
                  w="full"
                  mt="5px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="정책2" w="full">
                    정책2
                  </Radio>
                </Box>
                <Box
                  w="full"
                  mt="5px"
                  padding="7px"
                  border="1px"
                  borderColor="gray.3"
                  borderRadius="5px"
                >
                  <Radio value="정책3" w="full">
                    정책3
                  </Radio>
                </Box>
              </RadioGroup>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PolicyItem;

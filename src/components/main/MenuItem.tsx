import {
  VStack,
  Image,
  Heading,
  Text,
  Link,
  ScaleFade,
  Box,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { semanticColors } from "../../styles";

interface MenuItemProps {
  id: number;
  title: string;
  description: string;
  discountPolicy: string;
  image: string;
}

const discountPolicyArr = [
  { eng: "NONE", kor: "할인 없음" },
  { eng: "AMOUNT", kor: "정량" },
  { eng: "PERCENT", kor: "정률" },
  { eng: "MORNING", kor: "조조" },
];

export const MenuItem = ({
  id,
  title,
  description,
  discountPolicy,
  image,
}: MenuItemProps) => {
  const [isOver, setIsOver] = useState<boolean>(false);

  return (
    <>
      {!isOver ? (
        <VStack
          h="17rem"
          textAlign="center"
          spacing="8px"
          border="1px solid"
          borderColor="gray.2"
          onMouseOver={() => setIsOver(true)}
        >
          <Image src={image} w="full" h="full" mx="auto" boxSize="10rem" />
          <Flex alignItems="center">
            <Heading fontSize="md">{title}</Heading>

            <Badge colorScheme="purple">
              {discountPolicyArr.find((v) => v.eng === discountPolicy)?.kor}
            </Badge>
          </Flex>
          <Text
            fontSize="sm"
            w="18rem"
            px="0.75rem"
            color="yellow.9"
            wordBreak="keep-all"
          >
            {description}
          </Text>
        </VStack>
      ) : (
        <Link
          href={`/detail/${id}`}
          _hover={{ textDecor: "none" }}
          onMouseLeave={() => setIsOver(false)}
        >
          <ScaleFade initialScale={1.1} in={isOver}>
            <Box
              h="19rem"
              w="full"
              mt="-1rem"
              bgColor={semanticColors.primary}
              textAlign="center"
              overflow="hidden"
            >
              <Heading
                fontSize="4xl"
                fontWeight="medium"
                color="white"
                pt="3rem"
                px="1.25rem"
              >
                {title}
              </Heading>
              <Image src={image} boxSize="23rem" />
            </Box>
          </ScaleFade>
        </Link>
      )}
    </>
  );
};

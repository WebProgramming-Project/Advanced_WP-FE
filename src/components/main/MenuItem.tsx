import {
  VStack,
  Image,
  Heading,
  Text,
  Link,
  ScaleFade,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { semanticColors } from "../../styles";

interface MenuItemProps {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
}

export const MenuItem = ({ id, imgSrc, title, description }: MenuItemProps) => {
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
          <Image src={imgSrc} mx="auto" boxSize="10rem" />
          <Heading fontSize="md">{title}</Heading>
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
              <Image src={imgSrc} boxSize="23rem" />
            </Box>
          </ScaleFade>
        </Link>
      )}
    </>
  );
};

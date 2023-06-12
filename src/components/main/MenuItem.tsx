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
import { useGetImage } from "../../react-query/useMenu";

interface MenuItemProps {
  id: number;
  title: string;
  description: string;
}

export const MenuItem = ({ id, title, description }: MenuItemProps) => {
  const { data: imgSrc } = useGetImage(Number(id));

  const [isOver, setIsOver] = useState<boolean>(false);
  console.log(imgSrc);

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
          <Image src={imgSrc} w="full" h="full" mx="auto" boxSize="10rem" />
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

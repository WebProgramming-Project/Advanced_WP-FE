import { VStack, Image, Heading, Text } from "@chakra-ui/react";

interface MenuItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const MenuItem = ({ imgSrc, title, description }: MenuItemProps) => {
  return (
    <VStack
      h="17rem"
      textAlign="center"
      spacing="8px"
      border="1px solid"
      borderColor="gray.2"
    >
      <Image src={imgSrc} mx="auto" boxSize="10rem" />
      <Heading fontSize="md">{title}</Heading>
      <Text fontSize="sm" color="yellow.9" px="8px" wordBreak="keep-all">
        {description}
      </Text>
    </VStack>
  );
};

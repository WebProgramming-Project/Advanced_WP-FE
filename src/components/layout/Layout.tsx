import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { semanticColors } from "../../styles";
import { BsCart2 } from "react-icons/bs";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        h="80px"
        w="100%"
        borderBottom="1px solid"
        borderColor="gray.3"
        justifyContent="space-around"
        alignItems="center"
        position="sticky"
        top="0"
        bgColor="white"
      >
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon />}
          bgColor="white"
          fontSize="40px"
          _hover={{ color: semanticColors.primary }}
          onClick={onOpen}
        />
        <Link
          href="/"
          fontSize="40px"
          fontWeight="semibold"
          _hover={{ textDecor: "none" }}
        >
          <Box as="span" color={semanticColors.secondary}>
            MOM
          </Box>
          <Box as="span" color={semanticColors.primary}>
            ’
          </Box>
          <Box as="span" color={semanticColors.secondary}>
            S
          </Box>
          <Box as="span" color={semanticColors.primary}>
            &nbsp;TOUCH
          </Box>
        </Link>
        <IconButton
          as={Link}
          href="/order"
          aria-label="basket"
          icon={<BsCart2 />}
          bgColor="white"
          fontSize="40px"
          color={semanticColors.primary}
          _hover={{ bgColor: "white" }}
        />
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Flex w="1184px" h="100vh" mx="auto">
        <Outlet />
      </Flex>
      <Flex
        mt="10rem"
        h="130px"
        w="100%"
        bgColor="gray.2"
        px="200px"
        alignItems="center"
      >
        <Box w="1184px" mx="auto">
          <Text fontSize="lg" fontWeight="bold">
            <Box as="span" color={semanticColors.secondary}>
              MOM
            </Box>
            <Box as="span" color={semanticColors.primary}>
              ’
            </Box>
            <Box as="span" color={semanticColors.secondary}>
              S
            </Box>
            <Box as="span" color={semanticColors.primary}>
              &nbsp;TOUCH
            </Box>
            <Box as="span">&nbsp;금오공대점</Box>
          </Text>
          <Text fontSize="sm">경북 구미시 대학로 52</Text>
          <Text fontSize="sm">전화번호: 054-476-9958</Text>
          <Text fontSize="sm">운영시간: 09:00 ~ 22:00</Text>
          <Text fontSize="sm" color="black" fontWeight="semibold">
            © 2021 MOM’S TOUCH. ALL RIGHTS RESERVED.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="4xl">Menu</DrawerHeader>
        <DrawerBody>
          <Button
            as={Link}
            href="/"
            w="full"
            h="3rem"
            my="2px"
            _hover={{
              bgColor: semanticColors.primary,
              textDecor: "none",
              color: "white",
            }}
            variant="ghost"
            fontSize="2xl"
          >
            Home
          </Button>
          <Button
            as={Link}
            href="/order"
            w="full"
            h="3rem"
            my="2px"
            _hover={{
              bgColor: semanticColors.primary,
              textDecor: "none",
              color: "white",
            }}
            variant="ghost"
            fontSize="2xl"
          >
            주문하기
          </Button>
          <Button
            as={Link}
            href="/mypage"
            w="full"
            h="3rem"
            my="2px"
            _hover={{
              bgColor: semanticColors.primary,
              textDecor: "none",
              color: "white",
            }}
            variant="ghost"
            fontSize="2xl"
          >
            마이페이지
          </Button>
        </DrawerBody>
        <DrawerFooter borderTop="1px solid" borderColor="gray.4">
          <Button
            as={Link}
            href="/login"
            w="full"
            h="3rem"
            my="2px"
            variant="primary"
            fontSize="2xl"
          >
            로그인
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

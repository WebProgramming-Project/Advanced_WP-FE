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
import { useGetStore } from "../../react-query/useStore";
import { useEffect, useState } from "react";
import { Store } from "@types";
import { tohhmm } from "../../utils/dateUtil";
import { useSetRecoilState } from "recoil";
import { storeInfoState } from "../../store/store";

export const Layout = () => {
  const { data } = useGetStore();
  const setStoreInfo = useSetRecoilState(storeInfoState);

  const [store, setStore] = useState<Store>({
    storeId: 1000,
    storeName: "맘스터치",
    address: "경상북도 구미시 대학로 61",
    phoneNumber: "054-476-9958",
    open: "09:00:00",
    close: "22:00:00",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!data) return;

    setStore(data);
    setStoreInfo(data);
  }, [data]);

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
      <Flex w="1184px" h="100vh" mx="auto" pb="65rem">
        <Outlet />
      </Flex>
      <Flex h="130px" w="100%" bgColor="gray.2" px="200px" alignItems="center">
        <Box w="1184px" mx="auto">
          <Text fontSize="lg" fontWeight="bold" color={semanticColors.primary}>
            {store.storeName}
          </Text>
          <Text fontSize="sm">{store.address}</Text>
          <Text fontSize="sm">전화번호: {store.phoneNumber}</Text>
          <Text fontSize="sm">
            운영시간: {tohhmm(store.open)} ~ {tohhmm(store.close)}
          </Text>
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
            href="http://seboard2.site/oauth2/authorization/google"
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

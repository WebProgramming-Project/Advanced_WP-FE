import React, { useState, useRef } from "react";
import {
  Box,
  Image,
  Heading,
  Input,
  Textarea,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { semanticColors } from "../../../styles/semanticColor";
import noImage from "../../../assets/img/noImage.jpeg";
import axios from "axios";

interface IMenu {
  id: number;
  name: string;
  price: number;
  menuDescription: string;
  discountPolicy: string;
  image: string;
}

const MenuItem = ({
  id,
  name,
  price,
  menuDescription,
  discountPolicy,
  image,
}: IMenu) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bName, setBName] = useState(name);
  const [bPrice, setBPrice] = useState(price);
  const [bDescription, setBDescription] = useState(menuDescription);

  const [imageFile, setImage] = useState<FormData>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 onChange 및 이미지파일 미리보기 set
  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    setImage(formData);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBName(e.target.value);
  };

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBPrice(Number(e.target.value));
  };

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBDescription(e.target.value);
  };

  const modifyMenuSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: process.env.REACT_APP_API_ENDPOINT + "menus/images", //환경변수
      data: imageFile,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(async (res) => {
      const menuInfo = {
        name: bName,
        price: bPrice,
        description: bDescription,
        discountPolicy: discountPolicy,
        image: res.data,
      };

      const data = JSON.stringify(menuInfo);

      await axios({
        method: "put",
        url: process.env.REACT_APP_API_ENDPOINT + "menus/" + id, //환경변수
        data,
        headers: { "Content-Type": `application/json` },
      });

      setBName(name);
      setBPrice(price);
      setBDescription(menuDescription);
      onClose();
      location.reload();
    });
  };

  return (
    <>
      <Box w="full" h="100px" borderBottom="1px" borderColor="gray.3">
        <Box float="left" mt="5px">
          <Image
            boxSize="88px"
            objectFit="cover"
            src={image ? image : noImage}
            alt="Burger"
          />
        </Box>
        <Box float="left" mt="18px" ml="15px">
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text fontSize="sm" mt="3px">
            {menuDescription.length > 54
              ? (menuDescription = menuDescription.slice(0, 55) + "...")
              : menuDescription}
          </Text>
        </Box>
        <Box float="right" mt="32px">
          <Button size="sm" onClick={onOpen}>
            수정
          </Button>
        </Box>
        <Box float="right">
          <Heading
            as="h4"
            size="lg"
            color={semanticColors.primary}
            lineHeight="100px"
            mr="30px"
          >
            {price.toLocaleString()}원
          </Heading>
        </Box>
      </Box>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={modifyMenuSubmit}>
            <ModalHeader>{name} 정보수정</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box w="200px" margin="0 auto">
                <Image
                  src={image ? image : noImage}
                  alt="noImage"
                  w="150px"
                  ml="19px"
                />
                <Input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onUploadImage}
                />
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.6">
                  상품 이름 :{" "}
                </Text>
                <Input
                  type="text"
                  value={bName}
                  w="full"
                  onChange={changeName}
                />
              </Box>
              <Box mt="10px">
                <Text fontSize="sm" color="gray.6">
                  가격
                </Text>
                <Input
                  type="text"
                  value={bPrice}
                  w="full"
                  onChange={changePrice}
                />
              </Box>
              <Box mt="10px">
                <Text fontSize="sm" color="gray.6">
                  상품 설명
                </Text>
                <Textarea
                  value={bDescription}
                  w="full"
                  resize="none"
                  onChange={changeDescription}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                수정하기
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuItem;

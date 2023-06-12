import React, { useRef, useCallback, useState } from "react";
import { Box, Image, Button, Input } from "@chakra-ui/react";
import noImage from "../../../assets/img/noImage.jpeg";
import { usePostMenu } from "../../../react-query/useMenu";

const AddMenu = (): JSX.Element => {
  const { mutate, isLoading } = usePostMenu();
  const [image, setImage]: any = useState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const { name, price, description } = newMenu;

  // 이미지 onChange 및 이미지파일 미리보기 set
  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      // console.log(e.target.files[0].name);

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    },
    []
  );

  const onChangeNewMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
  };

  const newMenuSubmit = () => {
    mutate(
      {
        storeId: 0,
        name: name,
        price: price,
        description: description,
      },
      {
        onSuccess: () => {
          console.log("success");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <Box w="full" mt="30px">
      <Box w="full">
        <Box w="160px" textAlign="center" float="left">
          <Image
            boxSize="160px"
            objectFit="cover"
            src={image ? image : noImage}
            alt="addItem_Image"
          />
          <Input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
            mt="5px"
          />
        </Box>
        <Box w="84%" float="left" ml="20px">
          <Input
            type="text"
            placeholder="제품명을 입력해주세요."
            name="name"
            value={name}
            onChange={onChangeNewMenu}
          />
          <Input
            type="text"
            placeholder="제품 가격을 입력해주세요."
            mt="10px"
            name="price"
            value={price}
            onChange={onChangeNewMenu}
          />
          <Input
            placeholder="제품설명을 입력하세요."
            mt="10px"
            name="description"
            value={description}
            onChange={onChangeNewMenu}
          />
        </Box>
      </Box>
      <Box w="full">
        <Button
          float="right"
          size="sm"
          variant="primary"
          mt="10px"
          onClick={newMenuSubmit}
        >
          제품등록하기
        </Button>
      </Box>
    </Box>
  );
};

export default AddMenu;

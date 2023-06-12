import React, { useRef, useCallback, useState } from "react";
import { Box, Image, Button, Input } from "@chakra-ui/react";
import noImage from "../../../assets/img/noImage.jpeg";
// import { usePostMenu } from "../../../react-query/useMenu";
import { useRecoilValue } from "recoil";
import { storeInfoState } from "../../../store/store";
import axios from "axios";

const AddMenu = () => {
  // const { mutate, isLoading } = usePostMenu();
  const [image, setImage]: any = useState([]);
  const [base64Image, setBase64Image] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const getStoreInfo = useRecoilValue(storeInfoState);

  const { name, price, description } = newMenu;

  // 이미지 onChange 및 이미지파일 미리보기 set
  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChangeNewMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
  };

  const newMenuSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const menuInfo = {
      storeId: getStoreInfo.storeId,
      name: name,
      price: price,
      description: description,
    };

    const formData = new FormData();
    // formData.append("image", imageFile);

    const imageJson = JSON.stringify(btoa(image));
    const imageBlob = new Blob([imageJson], { type: "application/json" });
    formData.append("image", imageBlob);

    // formData.append("request", menuInfo.toString());
    const infoJson = JSON.stringify(menuInfo);
    const infoBlob = new Blob([infoJson], { type: "application/json" });
    formData.append("request", infoBlob);

    await axios({
      method: "post",
      url: process.env.REACT_APP_API_ENDPOINT + "menus", //환경변수
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    setImage([]);
    setNewMenu({
      name: "",
      price: 0,
      description: "",
    });
  };

  return (
    <form onSubmit={newMenuSubmit}>
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
            type="submit"
            float="right"
            size="sm"
            variant="primary"
            mt="10px"
          >
            제품등록하기
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddMenu;

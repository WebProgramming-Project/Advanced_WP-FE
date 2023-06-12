import React, { useRef, useState } from "react";
import { Box, Image, Button, Input } from "@chakra-ui/react";
import noImage from "../../../assets/img/noImage.jpeg";
import { useRecoilValue } from "recoil";
import { storeInfoState } from "../../../store/store";
import axios from "axios";

const AddMenu = () => {
  const [image, setImage]: any = useState(null);
  const [formData, setFormData] = useState<FormData>();
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

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    setFormData(formData);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null); // 파일의 컨텐츠
        resolve();
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

    await axios({
      method: "post",
      url: process.env.REACT_APP_API_ENDPOINT + "menus/images", //환경변수
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(async (res) => {
      const menuInfo = {
        storeId: getStoreInfo.storeId,
        name: name,
        price: Number(price),
        description: description,
        image: res.data,
      };

      const data = JSON.stringify(menuInfo);

      await axios({
        method: "post",
        url: process.env.REACT_APP_API_ENDPOINT + "menus", //환경변수
        data,
        headers: { "Content-Type": `application/json` },
      });
    });

    setImage(null);
    setNewMenu({
      name: "",
      price: 0,
      description: "",
    });

    location.reload();
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

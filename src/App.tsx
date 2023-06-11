import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import { DetailPage, Main, MyPage } from "./pages";
import { ShoppingBasketPage } from "./pages";

import ShopkeeperPage from "./pages/ShopkeeperPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        <Route path="/" element={<Box w="full">Home</Box>} />
        <Route path="/order" element={<Box w="full">Order</Box>} />
        <Route path="/about" element={<Box w="full">About</Box>} />
        <Route path="/shopkeeper" element={<ShopkeeperPage />} />
=======
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<ShoppingBasketPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/shopkeeper" element={<Box w="full">Shopkeeper</Box>} />
>>>>>>> c7bc9ec315d2ce5fd62893064feca2554e287703
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import { DetailPage, Main, MyPage } from "./pages";
import { ShoppingBasketPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<ShoppingBasketPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/shopkeeper" element={<Box w="full">Shopkeeper</Box>} />
      </Route>
    </Routes>
  );
}

export default App;

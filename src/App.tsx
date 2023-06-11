import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";

import ShopkeeperPage from "./pages/ShopkeeperPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Box w="full">Home</Box>} />
        <Route path="/order" element={<Box w="full">Order</Box>} />
        <Route path="/about" element={<Box w="full">About</Box>} />
        <Route path="/shopkeeper" element={<ShopkeeperPage />} />
      </Route>
      <Route path="/login" element={<Box w="full">Login</Box>} />
    </Routes>
  );
}

export default App;

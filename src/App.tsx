import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import { DetailPage, Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Box w="full">Order</Box>} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/shopkeeper" element={<Box w="full">Shopkeeper</Box>} />
      </Route>
    </Routes>
  );
}

export default App;

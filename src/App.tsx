import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import { Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Box w="full">
              <Main />
            </Box>
          }
        />
        <Route path="/order" element={<Box w="full">Order</Box>} />
        <Route path="/about" element={<Box w="full">About</Box>} />
        <Route path="/shopkeeper" element={<Box w="full">Shopkeeper</Box>} />
      </Route>
    </Routes>
  );
}

export default App;

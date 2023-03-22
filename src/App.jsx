import { Box, Text } from "@chakra-ui/react";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/layout/Navbar";
import Account from "./components/Account";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;

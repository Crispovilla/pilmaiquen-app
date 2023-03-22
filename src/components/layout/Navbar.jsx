import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { FaUserNinja, FaHome } from "react-icons/fa";
import React from "react";

import { Link, Outlet } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <>
      <Box bg="brand.secondary" w="100%" color="white" py={6}>
        <Stack alignItems="center" alignSelf="center">
          <Stack alignItems="center" direction="row" spacing={10}>
            <Text>
              <Link to="/">Inicio</Link>
            </Text>
            <Text>
              <Link to="/about">Nosotros</Link>
            </Text>
            <Text>
              <Link to="/offers">Ofertas</Link>
            </Text>
            <Text>
              <Link to="/products">Productos</Link>
            </Text>
            <Text>
              <Link to="/contact">Contacto</Link>
            </Text>
            <Spacer />
            <Text color="brand.accent">
              <Link to="/account">
                <Text mx={4}>Mi cuenta</Text>
              </Link>
            </Text>
          </Stack>
        </Stack>

        <section>
          <Outlet></Outlet>
        </section>
      </Box>
    </>
  );
};

export default NavbarMenu;

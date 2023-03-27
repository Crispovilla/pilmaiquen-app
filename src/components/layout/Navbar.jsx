import {
  Box,
  Flex,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserNinja, FaHome } from "react-icons/fa";
import React from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import NavbarMovile from "./NavbarMovil";

const NavbarMenu = () => {
  const location = useLocation();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const isActive = (path) => {
    return location.pathname === path; // Determinar si la ruta actual coincide con el enlace
  };

  return (
    <>
      {isLargerThan768 ? (
        <Box bg="brand.secondary" w="100%" color="white" py={6}>
          <Stack alignItems="center" alignSelf="center">
            <Stack alignItems="center" direction="row" spacing={10}>
              <Text>
                <Link style={isActive("/") ? { color: "yellow" } : {}} to="/">
                  Inicio
                </Link>
              </Text>
              <Text>
                <Link
                  style={isActive("/about") ? { color: "yellow" } : {}}
                  to="/about"
                >
                  Nosotros
                </Link>
              </Text>
              <Text>
                <Link
                  style={isActive("/offers") ? { color: "yellow" } : {}}
                  to="/offers"
                >
                  Ofertas
                </Link>
              </Text>
              <Text>
                <Link
                  style={isActive("/products") ? { color: "yellow" } : {}}
                  to="/products"
                >
                  Productos
                </Link>
              </Text>
              <Text>
                <Link
                  style={isActive("/contact") ? { color: "yellow" } : {}}
                  to="/contact"
                >
                  Contacto
                </Link>
              </Text>
              <Spacer />
              <Text color="brand.accent">
                <Link
                  style={isActive("/account") ? { color: "yellow" } : {}}
                  to="/account"
                >
                  <Text mx={4}>Mi cuenta</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>

          <section>
            <Outlet></Outlet>
          </section>
        </Box>
      ) : (
        <NavbarMovile />
      )}
    </>
  );
};

export default NavbarMenu;

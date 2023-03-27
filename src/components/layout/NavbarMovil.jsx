import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { FaUserNinja, FaHome } from "react-icons/fa";
import React from "react";
import {
  CiHome,
  CiSettings,
  CiUser,
  CiShoppingCart,
  CiChat2,
  CiDiscount1,
} from "react-icons/ci";

import { Link, Outlet, useLocation } from "react-router-dom";

const NavbarMovile = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path; // Determinar si la ruta actual coincide con el enlace
  };
  return (
    <>
      <Box bg="brand.secondary" w="100%" color="white" py={6}>
        <Stack alignItems="center" alignSelf="center">
          <Stack alignItems="center" direction="row" spacing={10}>
            <Text>
              <Link style={isActive("/") ? { color: "yellow" } : {}} to="/">
                <CiHome />
              </Link>
            </Text>
            <Text>
              <Link
                style={isActive("/about") ? { color: "yellow" } : {}}
                to="/about"
              >
                <CiUser />
              </Link>
            </Text>
            <Text>
              <Link
                style={isActive("/offers") ? { color: "yellow" } : {}}
                to="/offers"
              >
                <CiDiscount1 />
              </Link>
            </Text>
            <Text>
              <Link
                style={isActive("/products") ? { color: "yellow" } : {}}
                to="/products"
              >
                <CiShoppingCart />
              </Link>
            </Text>
            <Text>
              <Link
                style={isActive("/contact") ? { color: "yellow" } : {}}
                to="/contact"
              >
                <CiChat2 />
              </Link>
            </Text>
            <Spacer />
            <Text color="brand.accent">
              <Link
                style={isActive("/account") ? { color: "yellow" } : {}}
                to="/account"
              >
                <Text>
                  <CiSettings />
                </Text>
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

export default NavbarMovile;

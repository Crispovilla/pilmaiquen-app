import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";

const Home = () => {
  return (
    <Grid
      mt={8}
      templateColumns={{ base: "1fr", lg: "350px 1fr" }}
      gap={8}
      alignItems="center"
    >
      <Box w={{ base: "120px", sm: "160px", lg: "350px" }} mx="auto">
        <Image src={Logo} w="100%" h="auto" />
      </Box>
      <Flex
        direction="column"
        textAlign={{ base: "center", lg: "left" }}
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          mb={4}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Bienvenido!
          </Heading>
        </Text>
        <Text as="i" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} mb={6}>
          Explora el mundo al aire libre con nosotros: ¡equipando tus aventuras!
        </Text>
        <Center>
          <Button
            color="white"
            bg="brand.accent"
            _hover={{ bg: "brand.primary" }}
            width={{ base: "140px", lg: "140px" }}
          >
            <CiShoppingCart size="25px" />
            Ver Tienda
          </Button>
        </Center>
      </Flex>
    </Grid>
  );
};

export default Home;

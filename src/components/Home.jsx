import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  return (
    <Box>
      <Center>
        <Grid
          py="100px"
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
          }}
          gap={20}
        >
          <GridItem
            w={{
              base: "200px",
              sm: "200px",
              md: "260px",
              lg: "350px",
              xl: "450px",
            }}
          >
            <Image src={Logo}></Image>
          </GridItem>
          <Center>
            <GridItem py={{ md: "80px", lg: "100px", xl: "100px" }}>
              <Text
                color="gray.900"
                fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                fontWeight="extrabold"
              >
                <Heading fontSize={{ base: "22px", md: "36px", lg: "42px" }}>
                  Título del Home
                </Heading>
              </Text>
              <Text
                as="i"
                color="gray.900"
                fontSize={{ base: "16px", md: "24px", lg: "36px" }}
                py="10px"
              >
                Hola, este es un subtítulo
              </Text>
              <GridItem py={10}>
                <Button
                  color="white"
                  gap={2}
                  bg="brand.accent"
                  _hover={{ bg: "brand.primary" }}
                >
                  <AiOutlineShoppingCart fontSize="25px" />
                  Ver Tienda
                </Button>
              </GridItem>
            </GridItem>
          </Center>
        </Grid>
      </Center>
    </Box>
  );
};

export default Home;

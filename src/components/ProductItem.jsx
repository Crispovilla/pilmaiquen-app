import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const ProductItem = ({ data, addToCart }) => {
  let { id, titulo, imagen, descripcion, precio, cantidad } = data;
  return (
    <>
      <Flex flexDirection="column">
        <Box
          m={2}
          pb={4}
          border="1px"
          borderColor="gray.300"
          borderRadius="lg"
          alignContent="center"
          textAlign="center"
          maxW="xs"
          shadow="lg"
        >
          <Box py={4} fontWeight="bold" fontSize="1.2rem">
            {titulo}
          </Box>
          <Divider />
          <Center>
            <Box pt="20px" w="220px" h="auto">
              <Image boxSize="200px" src={imagen}></Image>
            </Box>
          </Center>

          <Box color="gray.600">{descripcion}</Box>
          <Box pt={4} fontWeight="bold" fontSize="2rem">
            ${precio}
          </Box>
          <Text fontSize="13px">Stock: {cantidad}</Text>

          <Button
            bg="brand.accent"
            color="brand.secondary"
            _hover={{ bg: "brand.primary" }}
            onClick={() => addToCart(id)}
          >
            <CiShoppingCart />
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ProductItem;

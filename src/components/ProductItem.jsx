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
import { MdShoppingCart } from "react-icons/md";

const ProductItem = ({ data, addToCart }) => {
  let { id, titulo, imagen, descripcion, precio, cantidad } = data;
  return (
    <>
      <Flex flexDirection="row">
        <Box
          m={2}
          pb={4}
          border="1px"
          borderColor="gray.300"
          borderRadius="lg"
          alignContent="center"
          textAlign="center"
          maxW="xs"
          pt={4}
          shadow="lg"
        >
          <Box pb="20px" fontWeight="bold" fontSize="1.2rem">
            {titulo}
          </Box>
          <Divider />
          <Center>
            <Box pt="20px" w="220px" h="auto">
              <Image src={imagen}></Image>
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
            gap={2}
            fontWeight="light"
            _hover={{ bg: "brand.primary" }}
            onClick={() => addToCart(id)}
          >
            <MdShoppingCart />
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ProductItem;

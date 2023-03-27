import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CartItem = ({ data, delFromCart }) => {
  let { id, titulo, imagen, descripcion, precio, cantidad, quantity } = data;
  return (
    <>
      {!titulo ? (
        <h2>No items in cart</h2>
      ) : (
        <Box px={2}>
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <Box pt={6}>
                <Text color="white" fontWeight="bold">
                  {titulo}
                </Text>
              </Box>

              <Flex gap={2} flexDirection="row">
                <Box>
                  <Text color="brand.accent" fontSize="sm">
                    $ {precio} x {quantity}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text color="brand.accent">
                    Subtotal = ${precio * quantity}
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Flex alignContent="center" alignItems="center" flexDirection="row">
              <Box pl={2} py={2} maxW="100px">
                <Image borderRadius="lg" src={imagen}></Image>
              </Box>
              <Box>
                <Flex flexDirection="column">
                  <Box color="brand.accent">
                    <Button
                      bg="brand.secondary"
                      _hover={{ bg: "brand.secondary", color: "brand.primary" }}
                    >
                      <AiOutlineMinusCircle
                        size="20px"
                        cursor="pointer"
                        onClick={() => delFromCart(id)}
                      />
                    </Button>
                  </Box>
                  <Box color="brand.accent">
                    <Button
                      bg="brand.secondary"
                      _hover={{ bg: "brand.secondary", color: "brand.primary" }}
                    >
                      <AiOutlinePlusCircle size="20px" cursor="pointer" />
                    </Button>
                  </Box>
                  <Box color="brand.accent">
                    <Button
                      bg="brand.secondary"
                      _hover={{ bg: "brand.secondary", color: "brand.primary" }}
                    >
                      <IoTrashOutline
                        cursor="pointer"
                        size="20px"
                        onClick={() => delFromCart(id, true)}
                      />
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <Divider />

          <Box></Box>
        </Box>
      )}
    </>
  );
};

export default CartItem;

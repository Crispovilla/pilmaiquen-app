import React from "react";
import { Box, Text, Flex, Heading, Center, Spacer } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import {
  MdLocalOffer,
  MdDashboardCustomize,
  MdShoppingCart,
  MdEventSeat,
} from "react-icons/md";
const Account = () => {
  return (
    <Box>
      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        <GridItem px={12} colSpan={2}>
          <Flex flexDirection="column" pt={8}>
            <Heading pt={8} fontSize="4xl" letterSpacing={1}>
              ¿Aún no te registras?
            </Heading>
            <Box>
              <Text pt={8} fontWeight="bold" fontSize="2xl">
                Aprovecha nuestros beneficios:
              </Text>
              <List fontSize="lg" pt={4} pb={4}>
                <ListItem>
                  <ListIcon fontSize={25} as={MdShoppingCart} />
                  Acceso a más productos.
                </ListItem>
                <ListItem>
                  <ListIcon fontSize={25} as={MdLocalOffer} />
                  Gana descuentos en nuestros productos.
                </ListItem>
                <ListItem>
                  <ListIcon fontSize={25} as={MdDashboardCustomize} />
                  Acceso a más funcionalidades.
                </ListItem>
                <ListItem>
                  <ListIcon fontSize={25} as={MdEventSeat} />
                  Comodidad.
                </ListItem>
              </List>
            </Box>
          </Flex>
        </GridItem>
        <Center>
          <Flex
            w={{
              base: "380px",
              sm: "400px",
              md: "600px",
              lg: "800px",
              xl: "800px",
            }}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Login />

            <Register />
          </Flex>
        </Center>
      </Grid>
    </Box>
  );
};

export default Account;

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config.js";
import { useEffect, useReducer, useState } from "react";

import { TYPES } from "../actions/shoppingActions.js";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer.js";
import ProductItem from "./ProductItem.jsx";
import CartItem from "./CartItem.jsx";
import {
  CiShoppingCart,
  CiWallet,
  CiCoinInsert,
  CiEraser,
} from "react-icons/ci";

const Products = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [buscar, setBuscar] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const productosCollection = collection(db, "productos");

  const getProducts = async () => {
    const data = await getDocs(productosCollection);
    dispatch({
      type: TYPES.READ_ALL_DATA,
      payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
  };
  //console.log(products);
  const addToCart = (id) => {
    //console.log("añadido al carrito");
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const searcher = (e) => {
    setBuscar(e.target.value);
  };

  const results = !buscar
    ? products
    : products.filter((val) =>
        val.titulo.toLowerCase().includes(buscar.toLowerCase())
      );

  useEffect(() => {
    setIsLoading(false);
    getProducts();
  }, []);
  if (isLoading) {
    return <Text py={40}>Cargando productos...</Text>;
  }
  return (
    <Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <VStack>
          <Box
            gap={{
              md: "30px",
              lg: "40px",
              xl: "40px",
            }}
            display={{
              base: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Box
              py={{
                base: "5px",
                sm: "10px",
                md: "15px",
                lg: "20px",
                xl: "25px",
              }}
            >
              <Heading>Productos</Heading>
            </Box>

            <Box
              py={{
                base: "5px",
                sm: "10px",
                md: "15px",
                lg: "20px",
                xl: "25px",
              }}
            >
              <Input
                w={{
                  base: "170px",
                  lg: "420px",
                }}
                type="text"
                borderColor="brand.primary"
                value={buscar}
                onChange={searcher}
                placeholder="Buscar..."
                activeClassName="active"
                _hover={{ borderColor: "brand.primary" }}
              />
            </Box>
          </Box>
          <Box
            display={{
              base: "block",
              sm: "block",
              md: "flex",

              lg: "flex",
              xl: "flex",
            }}
            shadow="lg"
          >
            {results.map((product) => (
              <ProductItem
                key={product.id}
                data={product}
                addToCart={addToCart}
              />
            ))}
          </Box>
        </VStack>
        <Spacer />
        <Box w="420px" px={2} bg="brand.secondary">
          <Flex flexDirection="column">
            <Center></Center>

            <Box py={2}>
              <Flex flexDirection="row">
                <Flex flexDirection="row">
                  <Box px={6} color="brand.accent">
                    <CiShoppingCart size="25px" />
                  </Box>
                  <Box px={6} color="brand.primary">
                    <CiWallet size="25px" />
                  </Box>
                  <Box px={6} color="brand.primary">
                    <CiCoinInsert size="25px" />
                  </Box>
                  <Spacer />
                  <Center h="40px">
                    <Divider orientation="vertical" />
                  </Center>
                  <Button
                    bg="brand.secondary"
                    color="brand.accent"
                    fontWeight="light"
                    _hover={{
                      bg: "brand.secondary",
                      color: "brand.primary",
                    }}
                    onClick={clearCart}
                  >
                    <CiEraser size="30px" />
                  </Button>
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Divider />
              {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;

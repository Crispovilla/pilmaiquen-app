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
} from "@chakra-ui/react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config.js";
import { useEffect, useReducer, useState } from "react";
import { MdShoppingCart, MdOutlineCleaningServices } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { TYPES } from "../actions/shoppingActions.js";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer.js";
import ProductItem from "./ProductItem.jsx";
import CartItem from "./CartItem.jsx";

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
        <Flex flexDirection="column">
          <Box>
            <Heading>Productos</Heading>
          </Box>
          <Flex flexDirection="row">
            <Box shadow="lg">
              {results.map((product) => (
                <ProductItem
                  key={product.id}
                  data={product}
                  addToCart={addToCart}
                />
              ))}
            </Box>
          </Flex>
        </Flex>
        <Spacer />
        <Box w="340px" pb={6} px={4} bg="brand.secondary">
          <Flex flexDirection="column">
            <Center>
              <Box py={4}>
                <Input
                  w={{
                    base: "300px",
                    lg: "300px",
                    xl: "300px",
                  }}
                  color="brand.primary"
                  type="text"
                  borderColor="brand.accent"
                  value={buscar}
                  onChange={searcher}
                  placeholder="Buscar..."
                  activeClassName="active"
                  _hover={{ borderColor: "brand.primary" }}
                />
              </Box>
            </Center>

            <Box py={2}>
              <Flex flexDirection="row">
                <Flex flexDirection="row">
                  <Box px={6} color="brand.accent">
                    <MdShoppingCart size="30px" />
                  </Box>
                  <Box px={6} color="brand.primary">
                    <IoWalletSharp size="30px" />
                  </Box>
                  <Box px={6} color="brand.primary">
                    <FaCashRegister size="30px" />
                  </Box>
                  <Spacer />
                  <Center h="40px">
                    <Divider orientation="vertical" />
                  </Center>
                  <Button
                    bg="brand.secondary"
                    color="brand.accent"
                    gap={2}
                    fontWeight="light"
                    _hover={{
                      bg: "brand.secondary",
                      color: "brand.primary",
                    }}
                    onClick={clearCart}
                  >
                    <MdOutlineCleaningServices size="30px" />
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

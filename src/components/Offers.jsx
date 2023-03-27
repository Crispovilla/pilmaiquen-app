import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiShare } from "react-icons/hi";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalCart from "./modal-cart/ModalCart.jsx";
import { MdShoppingCart } from "react-icons/md";

const Offers = () => {
  const [ofertas, setOfertas] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const ofertasCollection = collection(db, "oferta");

  const getOffers = async () => {
    const data = await getDocs(ofertasCollection);
    setOfertas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const searcher = (e) => {
    setBuscar(e.target.value);
  };

  const results = !buscar
    ? ofertas
    : ofertas.filter((val) =>
        val.titulo.toLowerCase().includes(buscar.toLowerCase())
      );

  useEffect(() => {
    setIsLoading(false);
    getOffers();
  }, []);
  if (isLoading) {
    return <Text py={40}>Cargando productos...</Text>;
  }
  return (
    <Box py={4}>
      <Flex p={8}>
        <Box>
          <Heading color="brand.secondary">Ofertas</Heading>
        </Box>
        <Spacer />
        <Box px={4}>
          <Input
            w={{
              base: "170px",
              lg: "420px",
            }}
            type="text"
            value={buscar}
            onChange={searcher}
            placeholder="Buscar..."
            activeClassName="active"
          />
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
      >
        {results.map((oferta) => (
          <GridItem
            key={oferta.id}
            mx={2}
            mb={2}
            borderWidth="1px"
            shadow="lg"
            p={8}
          >
            <VStack>
              <Box fontWeight="bold" fontSize="1.2rem">
                {oferta.titulo}
              </Box>
              <hr />
              <Box pt="20px" h="220px" w="auto">
                <Image boxSize="200px" src={oferta.imagen}></Image>
              </Box>
              <Box pt={4} color="gray.600">
                {oferta.descripcion}
              </Box>
              <Box pt={4} fontWeight="bold" fontSize="2rem">
                ${oferta.precio}
              </Box>

              <Box>
                <Flex gap={2} alignItems="center" textAlign="center" pt="4">
                  <Box>
                    <Button
                      bg="brand.accent"
                      color="brand.secondary"
                      gap={2}
                      fontWeight="light"
                      _hover={{ bg: "brand.primary" }}
                    >
                      <HiShare />
                      Compartir
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      bg="brand.accent"
                      fontWeight="light"
                      color="brand.secondary"
                      _hover={{ bg: "brand.primary" }}
                    >
                      Añadir
                    </Button>
                  </Box>
                </Flex>
                <Flex></Flex>
              </Box>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Offers;

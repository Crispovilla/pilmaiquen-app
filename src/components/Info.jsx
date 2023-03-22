import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaWhatsapp,
  FaLocationArrow,
  FaInstagramSquare,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const contacto = {
  horario: "Lunes a Sábado de 8:00 - 18:00",
  ubicacion: "Calle San Joaquín #345",
  telefono: "064 25 65 98 - 9 5698 9898",
};

const Info = () => {
  return (
    <Box bg="brand.accent" shadow="xl">
      <Center pt={8}>
        <Image w="130px" h="auto" src={logo} />
      </Center>
      <Stack pt={12} textAlign="left" ml={4} mb={2}>
        <Box>
          <Text as="b">Horario de atención:</Text> {contacto.horario}
        </Box>
        <Box>
          <Text as="b">Nos ubicamos en: </Text>
          {contacto.ubicacion}
        </Box>
        <Box>
          <Text as="b">Llámanos al: </Text>
          {contacto.telefono}
        </Box>
      </Stack>
      <Center mb={{ sm: "30px", md: "30px" }} pt={10}>
        <Flex color="brand.secondary">
          <Center gap={6}>
            <FaFacebook size="30px" />
            <FaWhatsapp size="30px" />
            <FaLocationArrow size="30px" />
            <FaInstagramSquare size="30px" />
          </Center>
        </Flex>
      </Center>
    </Box>
  );
};

export default Info;

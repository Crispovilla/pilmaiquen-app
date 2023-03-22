import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import React from "react";
import { useForm } from "react-hook-form";

import Info from "./Info";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box pt={4} alignItems="center" textAlign="center">
      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2, 1fr)",
        }}
        mx={{ sm: "30px" }}
      >
        <Box borderWidth="1px" shadow="xl" p={8}>
          <GridItem>
            <Box pb={10}>
              <Heading letterSpacing={2} color="brand.secondary">
                Contacto
              </Heading>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <FormLabel color="gray.500">Nombre:</FormLabel>
                <Input
                  shadow="sm"
                  borderWidth="1px"
                  variant="flushed"
                  focusBorderColor="brand.primary"
                  errorBorderColor="red.500"
                  type="text"
                  {...register("nombre", {
                    required: true,
                    maxLength: 20,
                    minLength: "5",
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <Text color="red.400">Este campo es requerido</Text>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <Text color="red.400">
                    Este campo debe tener 20 caracteres como máximo
                  </Text>
                )}
                {errors.nombre?.type === "minLength" && (
                  <Text color="red.400">
                    Este campo debe tener 5 caracteres como mínimo
                  </Text>
                )}
              </Box>

              <Box py={2}>
                <FormLabel color="gray.500">Correo electrónico:</FormLabel>
                <Input
                  px={2}
                  shadow="sm"
                  borderWidth="1px"
                  variant="flushed"
                  focusBorderColor="brand.primary"
                  errorBorderColor="red.500"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <Text color="red.400">Email Inválido.</Text>
                )}
              </Box>
              <Box pb={6}>
                <FormLabel color="gray.500">Tu consulta:</FormLabel>
                <Textarea
                  shadow="sm"
                  borderWidth="1px"
                  variant="flushed"
                  focusBorderColor="brand.primary"
                  errorBorderColor="red.500"
                  type="text"
                  {...register("consulta", {
                    required: true,
                  })}
                />
              </Box>

              <Box>
                <Button
                  type="submit"
                  color="white"
                  fontWeight="light"
                  bg="brand.accent"
                  _hover={{ bg: "brand.primary" }}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </GridItem>
        </Box>
        <Info />
      </Grid>
      <Box p={10} mt={6}>
        <Text fontSize=".8rem">Powered By Krispo</Text>
      </Box>
    </Box>
  );
};

export default Contact;

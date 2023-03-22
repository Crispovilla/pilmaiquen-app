import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./loginStyles.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    console.log(data);
    console.log("login");
  };

  return (
    <Box
      w="100%"
      borderWidth="1px"
      shadow="xl"
      alignItems="center"
      textAlign="center"
    >
      <Flex flexDirection="column" px={12} pt={16}>
        <Heading color="brand.secondary" letterSpacing={2}>
          Ingresar
        </Heading>
        <Box pt={4}>
          <form onSubmit={handleSubmit(onLogin)}>
            <FormLabel pt={4} color="gray.500">
              Correo electrónico:
            </FormLabel>
            <Input
              px={2}
              variant="flushed"
              focusBorderColor="brand.primary"
              shadow="sm"
              borderWidth="1px"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <Text color="red.400">Email Inválido.</Text>
            )}

            <FormLabel pt={4} color="gray.500">
              Contraseña:
            </FormLabel>
            <Input
              px={2}
              variant="flushed"
              focusBorderColor="brand.primary"
              errorBorderColor="red.500"
              shadow="sm"
              borderWidth="1px"
              type="password"
              {...register("password", {
                required: true,
                maxLength: 15,
                minLength: "6",
              })}
            />
            {errors.password?.type === "required" && (
              <Text color="red.400">Este campo es requerido</Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Text color="red.400">
                Este campo debe tener 15 caracteres como máximo
              </Text>
            )}
            {errors.password?.type === "minLength" && (
              <Text color="red.400">
                Este campo debe tener 6 caracteres como mínimo
              </Text>
            )}
            <Box pt={2}>
              <Checkbox colorScheme="green" defaultChecked>
                Recordarme más tarde
              </Checkbox>
            </Box>
            <Box pb={4} pt="20px">
              <Button
                type="submit"
                color="white"
                fontWeight="light"
                bg="brand.accent"
                _hover={{ bg: "brand.primary" }}
              >
                Ingresar
              </Button>
              <Text>O</Text>
              <Button fontWeight="light">Google</Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;

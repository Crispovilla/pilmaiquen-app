import {
  Box,
  Button,
  color,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onRegister = (data) => {
    console.log("register");
    console.log(data);
  };
  return (
    <Box w="100%" bg="brand.accent" alignItems="center" textAlign="center">
      <Flex flexDirection="column" px={12} pt={16}>
        <Heading color="brand.secondary" letterSpacing={2}>
          Registro
        </Heading>
        <Box pt={4}>
          <form onSubmit={handleSubmit(onRegister)}>
            <FormLabel pt={4} color="gray.700">
              Nombre de usuario:
            </FormLabel>
            <Input
              px={2}
              shadow="sm"
              borderWidth="1px"
              type="text"
              variant="flushed"
              focusBorderColor="brand.secondary"
              {...register("userName", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            {errors.userName?.type === "required" && (
              <Text color="red.600">Este campo es requerido</Text>
            )}
            {errors.userName?.type === "minLength" && (
              <Text color="red.600">Mínimo 6 caracteres</Text>
            )}
            {errors.userName?.type === "maxLength" && (
              <Text color="red.600">Máximo 20 caracteres</Text>
            )}
            <FormLabel pt={4} color="gray.700">
              Correo electrónico:
            </FormLabel>
            <Input
              px={2}
              shadow="sm"
              borderWidth="1px"
              type="email"
              variant="flushed"
              focusBorderColor="brand.secondary"
              {...register("email", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <Text color="red.600">Email Inválido.</Text>
            )}

            <FormLabel pt={4} color="gray.700">
              Contraseña:
            </FormLabel>
            <Input
              px={2}
              shadow="sm"
              borderWidth="1px"
              type="password"
              variant="flushed"
              focusBorderColor="brand.secondary"
              {...register("password", {
                required: true,
                maxLength: 15,
                minLength: "6",
              })}
            />
            {errors.password?.type === "required" && (
              <Text color="red.600">Este campo es requerido</Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Text color="red.600">
                Este campo debe tener 15 caracteres como máximo
              </Text>
            )}
            {errors.password?.type === "minLength" && (
              <Text color="red.600">
                Este campo debe tener 6 caracteres como mínimo
              </Text>
            )}
            <FormLabel pt={4} color="gray.700">
              Repita Contraseña:
            </FormLabel>
            <Input
              px={2}
              shadow="sm"
              borderWidth="1px"
              type="password"
              variant="flushed"
              focusBorderColor="brand.secondary"
              {...register("confirm_password", {
                required: true,
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirm_password?.type === "validate" && (
              <Text color="red.600">Las contraseñas no coinciden</Text>
            )}
            <Box pb={4} pt="20px">
              <Button
                type="submit"
                color="white"
                fontWeight="light"
                bg="brand.secondary"
                _hover={{ bg: "brand.primary", color: "brand.secondary" }}
              >
                Registrar
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box py="110px">
      <Flex px={20} py={10}>
        <Heading color="brand.secondary">Nuestros servicios</Heading>
      </Flex>
    </Box>
  );
};

export default About;

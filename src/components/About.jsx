import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box py="110px">
      <Heading ml={4} color="brand.secondary">
        Nuestros servicios
      </Heading>
      <Flex px={20} py={10}>
        <Text textAlign="justify">
          Bienvenido a nuestra tienda online outdoor, donde encontrarás todo lo
          que necesitas para explorar el mundo al aire libre. Nos apasiona la
          aventura y queremos ayudarte a equiparte para que puedas disfrutar al
          máximo de tus excursiones y actividades al aire libre. Tenemos una
          amplia variedad de productos de alta calidad, desde tiendas de campaña
          y sacos de dormir hasta mochilas, ropa técnica y calzado
          especializado. Nuestros productos están diseñados para soportar las
          condiciones más duras y para proporcionarte la comodidad y el
          rendimiento que necesitas en tus aventuras. Nos enorgullecemos de
          ofrecer un servicio excepcional al cliente y estamos comprometidos con
          tu satisfacción. Nos aseguramos de que nuestros productos sean
          cuidadosamente seleccionados y de que estén disponibles a precios
          competitivos para que puedas disfrutar de tus actividades al aire
          libre sin tener que preocuparte por el costo. Nuestro equipo está
          formado por expertos en deportes al aire libre, quienes pueden
          brindarte asesoramiento y orientación personalizada para ayudarte a
          elegir los productos que mejor se adapten a tus necesidades y
          objetivos. Además, estamos constantemente actualizando nuestro
          catálogo para que siempre encuentres lo último en tecnología y
          tendencias.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;

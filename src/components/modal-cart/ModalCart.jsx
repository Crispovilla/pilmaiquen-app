import React, { useReducer } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import CartItem from "../CartItem";
import {
  initialState,
  shoppingInitialState,
  shoppingReducer,
} from "../../reducers/shoppingReducer";

const ModalCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteFromCart = () => {
    console.log("borrado del carrito");
  };

  return (
    <>
      <Button bg="brand.accent" onClick={onOpen}>
        <BsCart3 />
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            borderRadius="5px"
            bg="brand.accent"
            color="brand.secondary"
          >
            Productos en el carro
          </ModalHeader>
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              <Box>
                <Button>Eliminar</Button>
              </Box>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bg="brand.accent" color="white" mx={3}>
              Limpiar carrito
            </Button>
            <Button bg="brand.accent" color="white" mx={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCart;

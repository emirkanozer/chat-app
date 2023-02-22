import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

function Register() {
  return (
    <div>
      <Box
        borderRadius={16}
        p={16}
        bg={"rgba(32,32,32,0.5)"}
        w={"30vw"}
        h="80vh"
        maxW="md"
        mx="auto"
        mt="8"
      >
        <Text textAlign={"center"} fontSize={"3xl"}>
          Register
        </Text>

        <FormControl mt={6}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Name" />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel>Surname</FormLabel>
          <Input type="text" placeholder="Surname" />
        </FormControl>

        <FormControl mt={6}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel>Password Confirm</FormLabel>
          <Input type="password" placeholder="Password Confirm" />
        </FormControl>

        <Button w={"100%"} colorScheme="pink" mt="6">
          Register
        </Button>
        <Text mt={2}>
          Do you have account?
          <Link> Login</Link>
        </Text>
      </Box>
    </div>
  );
}

export default Register;

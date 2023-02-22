import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Login() {
  return (
    <div>
      <Box
        borderRadius={16}
        p={16}
        bg={"rgba(32,32,32,0.5)"}
        w={"30vw"}
        h="50vh"
        maxW="md"
        mx="auto"
        mt="8"
      >
        <Text textAlign={"center"} fontSize={"3xl"}>
          Login
        </Text>
        <FormControl mt={6}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button w={"100%"} colorScheme="whatsapp" mt="4">
          Login
        </Button>
        <Button w={"100%"} colorScheme="pink" mt="4">
          Register
        </Button>
      </Box>
    </div>
  );
}

export default Login;

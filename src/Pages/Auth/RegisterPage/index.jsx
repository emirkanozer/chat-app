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
import { useFormik } from "formik";
import { fetchRegister } from "../../../Utils/api";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "deneme",
      password: "",
    },
    onSubmit: async (values) => {
      const registerResponse = await fetchRegister({
        username: values.username,
        password: values.password,
      });
      login(registerResponse);
      navigate("/messages");
    },
  });
  return (
    <div>
      <Box
        borderRadius={16}
        p={16}
        bg={"rgba(32,32,32,0.5)"}
        w={"30vw"}
        h="60vh"
        maxW="md"
        mx="auto"
        mt="8"
      >
        <Text textAlign={"center"} fontSize={"3xl"}>
          Register
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <FormControl mt={6}>
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              placeholder="Name"
            />
          </FormControl>

          <FormControl mt="6">
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              placeholder="Password"
            />
          </FormControl>

          <FormControl mt="6">
            <FormLabel>Password Confirm</FormLabel>
            <Input
              id="passwordConfirm"
              type="password"
              placeholder="Password Confirm"
            />
          </FormControl>

          <Button type="submit" w={"100%"} colorScheme="pink" mt="6">
            Register
          </Button>

          <Text mt={2}>
            Do you have account?
            <Link> Login</Link>
          </Text>
        </form>
      </Box>
    </div>
  );
}

export default Register;

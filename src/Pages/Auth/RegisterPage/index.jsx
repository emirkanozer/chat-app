import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
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
      username: "",
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
        p={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg={"rgba(32,32,32,0.5)"}
        minH="50vh"
        minW="20vw"
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
              placeholder="Username"
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

          <Text display="flex" gap={1} mt={2}>
            Do you have account?
            <Text
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Text>
          </Text>
        </form>
      </Box>
    </div>
  );
}

export default Register;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import { fetchLogin } from "../../../Utils/api";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, isLogin } = useAuth();
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const responseLogin = await fetchLogin({
        username: values.username,
        password: values.password,
      });
      login(responseLogin);
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
        h="50vh"
        maxW="md"
        mx="auto"
        mt="8"
      >
        <Text textAlign={"center"} fontSize={"3xl"}>
          Login
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl mt={6}>
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              type="username"
              placeholder="Username"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              id="password"
              type="password"
              placeholder="Password"
            />
          </FormControl>
          <Button type="submit" w={"100%"} colorScheme="whatsapp" mt="4">
            Login
          </Button>
          <Button onClick={goRegister} w={"100%"} colorScheme="pink" mt="4">
            Register
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;

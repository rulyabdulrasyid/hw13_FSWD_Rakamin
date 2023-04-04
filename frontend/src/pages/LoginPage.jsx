import React from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link, Form } from "react-router-dom";
import { PATH } from "../constants/path.js";

function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value
    );
  };

  return (
    <Box w="full" py={4} px={24} mx="auto" mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Login to Your Account
      </Text>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Form onSubmit={onSubmit}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="Email" name="email" placeholder="Enter Your Email" />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </FormControl>

          <Button type="submit" mt="10px" colorScheme="teal">
            Login
          </Button>
        </Form>
        <Text>don't have accont?? Please</Text>
        <Button mt="10px">
          <Link to={PATH.register}>Register</Link>
        </Button>
      </Box>
      <Button mt="10px">
        <Link to={PATH.home}>
          <Text>Back To Home</Text>
        </Link>
      </Button>
    </Box>
  );
}

export default LoginPage;

import { Link, Form } from "react-router-dom";
import { PATH } from "../constants/path.js";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

function RegisterPage() {
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
        Register
      </Text>

      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <form>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="name" name="name" placeholder="Enter your name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter a password"
              name="password"
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              name="confirmpassword"
            />
          </FormControl>

          <Button mt={6} colorScheme="teal" type="submit">
            Register
          </Button>
        </form>
        <Button mt="10px">
          <Link to={PATH.home}>
            <Text>Back To Home</Text>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterPage;

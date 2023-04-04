import { Link } from "react-router-dom";
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
import { useForm } from "react-hook-form";
import { registerUser } from "../fetcher/indexFetcher.js";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await registerUser(data);

      toast({
        title: "Registered",
        description:
          "You have successfully registered. Now, please log in with your account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setIsSubmitting(false);
    } catch (e) {
      toast({
        title: "An error occurred.",
        description: "Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      setIsSubmitting(false);
    }
  };

  return (
    <Box w="full" py={4} px={24} mx="auto" mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Register
      </Text>

      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter a password"
              {...register("password", { required: true })}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword && (
              <FormErrorMessage>Passwords do not match</FormErrorMessage>
            )}
          </FormControl>

          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
          >
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

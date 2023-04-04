import { Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PATH } from "../constants/path.js";

function Layout({ children }) {
  return (
    <>
      <Flex
        padding={4}
        sx={{ position: "sticky", top: 0 }}
        backgroundColor="teal.200"
        color="teal.700"
      >
        <Text as="b" fontSize="xl">
          My Bookstore
        </Text>
        <Spacer />
        <HStack>
          <Link to={PATH.login}>
            <Button>Login</Button>
          </Link>
        </HStack>
      </Flex>
      {children}
    </>
  );
}

export default Layout;

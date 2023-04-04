import { Flex, Text } from "@chakra-ui/react";
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
      </Flex>
      {children}
    </>
  );
}

export default Layout;

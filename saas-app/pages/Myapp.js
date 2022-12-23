import { ChakraProvider, Spinner, Center, Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/chat/Login";
import { auth } from "../firebaseconfig";
import Sidebar from "../components/chat/Sidebar";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }

  if (!user) {
    return (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Box
        width={"100%"}
        height="100vh"
        bgGradient="linear(to-r, #13598e, #091926)"
      >
        <Sidebar />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

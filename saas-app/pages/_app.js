import "../styles/globals.css";
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/chat/Login";
import { auth } from "../firebaseconfig";
import Sidebar from "../components/chat/Sidebar";

export default function App({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh" color="yellow" border="3px solid red">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
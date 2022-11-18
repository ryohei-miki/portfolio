import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          maxW="786px"
          minH="100vh"
          mx="auto"
          p={10}
          backgroundColor="#1E1E1E"
          boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

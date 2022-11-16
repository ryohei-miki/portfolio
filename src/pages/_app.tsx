import { ChakraProvider, Box, Center, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400&family=Oxanium:wght@600;700&family=Roboto+Mono:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Box
          maxW="786px"
          minH="100vh"
          border={"1px solid white"}
          mx="auto"
          p={10}
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

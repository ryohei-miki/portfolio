import "../styles/globals.css";
import { ChakraProvider, extendTheme, Box, Center } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "'Roboto Mono',cursive;",
  body: "'Roboto Mono','Kiwi Maru','monospace',serif;",
  oxanium: "Oxanium', cursive",
};

const styles = {
  global: {
    body: {
      backgroundColor: "#1E1E1E",
      color: "#ffffff",
    },
  },
};

const theme = extendTheme({ styles, colors, fonts });

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

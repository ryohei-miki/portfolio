import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { BodyWrapper } from "components/BodyWrapper";
import theme from "theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RM Portfolio</title>
      </Head>
      <ChakraProvider theme={theme}>
        <BodyWrapper child={<Component {...pageProps} />} />
      </ChakraProvider>
    </>
  );
}

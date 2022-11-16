import { Box, Container, Avatar, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Box w="100%" fontSize="4xl" textAlign="center" mt={10}>
        <Heading as="h1">$ Rohei Miki`s Portfolio _</Heading>
      </Box>
      <Box textAlign="center" mt={12}>
        <Avatar
          size="2xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box mt={12}>
        <Heading as="h2" size="xl" noOfLines={1}>
          # About
        </Heading>
        <Text>
          こんにちは三木っていいます。よろしくお願いします。
          いい天気ですね。まだまだやりたいことがたくさんあります。マジでよろしくな！
          こんにちは三木っていいます。よろしくお願いします。
          いい天気ですね。まだまだやりたいことがたくさんあります。マジでよろしくな！
        </Text>
      </Box>
    </>
  );
}

import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Flex,
  keyframes,
  Stack,
  HStack,
  VStack,
  Divider,
  Card,
  CardBody,
  Image,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
// import Image from "next/image";
import GitHubIcon from "../../public/images/github.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import ZennIcon from "../../public/images/zenn.svg";

import theme from "../theme";

const flash = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1;}
`;

const animation = `${flash} 1.5s linear infinite`;

export default function Home() {
  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h1"
          textStyle="h1"
          fontFamily={"'Oxanium',cursive;"}
          fontSize="3xl"
          _before={{ content: `"$"`, color: "#C778DD", paddingRight: "3" }}
          _after={{ content: `"_"`, paddingLeft: "2", animation }}
        >
          RM Portfolio
        </Heading>
      </Box>
      <Box textAlign="center" mt={12}>
        <Avatar
          w={40}
          h={40}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <HStack spacing={8} justifyContent="center" mt="8">
          <Link
            href="https://github.com/RyoheiMiki"
            isExternal
            _hover={{ opacity: 0.6 }}
          >
            <GitHubIcon width={32} height={32} />
          </Link>
          <Link
            href="https://twitter.com/rm_oshushi"
            isExternal
            _hover={{ opacity: 0.6 }}
          >
            <TwitterIcon width={32} height={32} />
          </Link>
          <Link href="https://zenn.dev/rm" isExternal _hover={{ opacity: 0.6 }}>
            <ZennIcon width={32} height={32} />
          </Link>
        </HStack>
      </Box>
      <VStack as="section" align="flex-start">
        <Box mt={12}>
          <Heading
            as="h2"
            textStyle="h2"
            fontSize="3xl"
            _before={{ content: `"/"`, color: "#E43777", paddingRight: "3" }}
          >
            About
          </Heading>
          <Text mt="4" fontSize="lg">
            こんにちは三木っていいます。よろしくお願いします。 いい天気ですね。
            こんにちは三木っていいます。よろしくお願いします。 いい天気ですね。
            こんにちは三木っていいます。よろしくお願いします。 いい天気ですね。
          </Text>
        </Box>
        <Box pl={12} width="100%">
          <Box mt={12}>
            <Heading
              as="h2"
              textStyle="h2"
              fontSize="2xl"
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: { base: "0px", sm: "40%" },
                backgroundColor: "#7CDBCB",
              }}
            >
              Job
            </Heading>
            <Text mt="4" fontSize="lg">
              フロントエンドエンジニア
            </Text>
          </Box>
          <Box mt={12}>
            <Heading
              as="h2"
              textStyle="h2"
              fontSize="2xl"
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: { base: "0px", sm: "40%" },
                backgroundColor: "#7CDBCB ",
              }}
            >
              Favolite
            </Heading>
            <Text mt="4" fontSize="lg">
              ピアノ,neko
            </Text>
          </Box>
          <Box mt={12}>
            <Heading
              as="h2"
              textStyle="h2"
              fontSize="2xl"
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: { base: "0px", sm: "40%" },
                backgroundColor: "#7CDBCB",
              }}
            >
              Skill
            </Heading>
            <Text mt="4" fontSize="xl">
              React, Next.js, ruby, Ruby on Rails
            </Text>
          </Box>
        </Box>
      </VStack>
      <Divider textAlign="center" m={"6rem auto 3rem auto"} width={40} />
      <VStack as="section">
        <Box mt={12}>
          <Heading
            as="h2"
            textStyle="h2"
            fontSize="3xl"
            _before={{ content: `"/"`, color: "#574EC1", paddingRight: "3" }}
          >
            Work
          </Heading>
          <Text mt="4" fontSize="lg">
            自分が作成したいろいろなものを載せていく予定です。
            自分が作成したいろいろなものを載せていく予定です。
            自分が作成したいろいろなものを載せていく予定です。
          </Text>
        </Box>
        <VStack pt="8" spacing={20}>
          <Card>
            <CardBody p={0}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6">
                <Heading size="md" color={"#fff"}>
                  Living room Sofa
                </Heading>
                <Text color={"#fff"}>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody p={0}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6">
                <Heading size="md" color={"#fff"}>
                  Living room Sofa
                </Heading>
                <Text color={"#fff"}>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </VStack>
      </VStack>
      <Box as="footer" mt={20} textAlign="center" fontSize="sm">
        <Text>© 2022 Ryohei Miki. All Rights Reserved.</Text>
      </Box>
    </>
  );
}

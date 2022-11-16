import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Flex,
  keyframes,
  Stack,
  VStack,
  Divider,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
// import Image from "next/image";
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
      <Box textAlign="center" mt={10}>
        <Heading
          as="h1"
          textStyle="h1"
          fontFamily={"'Oxanium',cursive;"}
          fontSize="3xl"
          _before={{ content: `"$"`, color: "#C778DD", paddingRight: "3" }}
          _after={{ content: `"_"`, paddingLeft: "2", animation }}
        >
          Rohei Miki`s Portfolio
        </Heading>
      </Box>
      <Box textAlign="center" mt={12}>
        <Avatar
          size="2xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <VStack as="section" align="flex-start">
        <Box mt={12}>
          <Heading
            as="h2"
            textStyle="h2"
            _before={{ content: `"/"`, color: "#E43777", paddingRight: "3" }}
          >
            About
          </Heading>
          <Text mt="4" fontSize="xl">
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
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: "38vw",
                backgroundColor: "#7CDBCB",
              }}
            >
              Job
            </Heading>
            <Text mt="4" fontSize="xl">
              フロントエンドエンジニア
            </Text>
          </Box>
          <Box mt={12}>
            <Heading
              as="h2"
              textStyle="h2"
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: "38vw",
                backgroundColor: "#7CDBCB ",
              }}
            >
              Favolite
            </Heading>
            <Text mt="4" fontSize="xl">
              ピアノ,neko
            </Text>
          </Box>
          <Box mt={12}>
            <Heading
              as="h2"
              textStyle="h2"
              _before={{ content: `"#"`, color: "#7CDBCB", paddingRight: "3" }}
              _after={{
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: `""`,
                height: "1px",
                width: "38vw",
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
            _before={{ content: `"/"`, color: "#574EC1", paddingRight: "3" }}
          >
            Work
          </Heading>
          <Text mt="4" fontSize="xl">
            自分が作成したいろいろなものを載せていく予定です。
            自分が作成したいろいろなものを載せていく予定です。
            自分が作成したいろいろなものを載せていく予定です。
          </Text>
        </Box>
        <VStack pt="8">
          <Card maxW="xl">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
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
          <Card maxW="xl">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
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
    </>
  );
}

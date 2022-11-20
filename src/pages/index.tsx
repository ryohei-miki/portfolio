import {
  Avatar,
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SnsLinks } from "components/SnsLinks";
import { introData, worksData } from "data";
import { flashAnimation } from "styles/animation";

export default function Home() {
  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h1"
          textStyle="h1"
          fontFamily={"'Oxanium',cursive;"}
          fontSize="3xl"
          _before={{
            content: `"$"`,
            color: "org.purple",
            pr: "4",
          }}
          _after={{
            content: `"_"`,
            pl: "2",
            animation: flashAnimation,
          }}
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
          <SnsLinks />
        </HStack>
      </Box>
      <VStack as="section" align="flex-start">
        <Box mt={12}>
          <Heading as="h2" textStyle="h2" fontSize="3xl">
            About
          </Heading>
          <Text mt="4" fontSize="lg" lineHeight={1.8}>
            こんにちは！はじめまして、三木と申します！名古屋に在住してます🏠
            <br />
            普段はエンジニアとして、SaaSのプロダクトの開発を行なっています。
            主な関心、興味はフロントエンドにありますが固執しすぎず、幅広く学習していきたいと思っています📚
          </Text>
        </Box>
        <Box pl={12} w="100%">
          <VStack mt={12} alignItems="flex-start" spacing={16}>
            {introData.map((item) => (
              <Box key={item.title} w="100%">
                <Heading as="h3" textStyle="h3" fontSize="2xl">
                  {item.title}
                </Heading>
                <Text mt={4} fontSize="lg">
                  {item.text}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
      <Divider textAlign="center" m={"6rem auto 3rem auto"} w={40} />
      <VStack as="section" alignItems="left">
        <Box mt={12}>
          <Heading as="h2" textStyle="h2" fontSize="3xl">
            Work
          </Heading>
          <Text mt="4" mb="6" fontSize="lg">
            日々のアウトプットの成果物をここに載せていく予定です。
          </Text>
        </Box>
        <VStack pt="8" spacing={20}>
          {worksData.map((item) => (
            <Card key={item.title}>
              <CardBody p={0}>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6">
                  <Heading size="md" color={"white"}>
                    {item.title}
                  </Heading>
                  <Text color={"white"}>{item.text}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </VStack>
      </VStack>
      <Box as="footer" mt={20} textAlign="center" fontSize="sm">
        <Text>© 2022 Ryohei Miki. All Rights Reserved.</Text>
      </Box>
    </>
  );
}

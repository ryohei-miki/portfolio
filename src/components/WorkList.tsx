import {
  Card,
  CardBody,
  Heading,
  Link,
  Tag,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  colorMode: string;
};

export const worksData = [
  {
    title: "〇〇くん！ここのバグ修正しといて！と言われた時にやること",
    link: "https://zenn.dev/rm/articles/ba59cf35f9656d",
    tag: "Zenn",
  },
  {
    title: "Next.js + Chakra UIでポートフォリオサイトを作った",
    link: "https://zenn.dev/rm/articles/898991947184cf",
    tag: "Zenn",
  },
];

export const WorkList: React.FC<Props> = ({ colorMode }) => {
  const bgColor = colorMode === "dark" ? "gray.700" : "gray.100";

  return (
    <>
      {worksData.map((item) => (
        <Link key={item.link} target="_blank" href={item.link}>
          <Card bg={bgColor} border="none" boxShadow="none" w={340} h={160}>
            <CardBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <VStack alignItems={"flex-start"}>
                <Heading size="md">{item.title}</Heading>
              </VStack>
              <Box>
                <Tag size={"md"} colorScheme="teal">
                  {item.tag}
                </Tag>
              </Box>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
};

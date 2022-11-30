import { Heading, Text, Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { introData } from "data";

export const Introduction: React.FC = () => (
  <>
    {introData.map((item) => (
      <Box key={item.title} w="100%" position="relative">
        <Heading as="h3" textStyle="h3" fontSize="2xl">
          {item.title}
        </Heading>
        <Text mt={4} fontSize="lg">
          {item.text}
        </Text>
        {item.title === "Skill" && (
          <Link as={NextLink} href="/carrier/title">
            <Button isDisabled={true} mt={4}>
              スキル、経歴の詳細 🔍
            </Button>
          </Link>
        )}
      </Box>
    ))}
  </>
);

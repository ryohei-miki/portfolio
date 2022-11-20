import { Card, CardBody, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { worksData } from "data";

export const ProjectList: React.FC = () => (
  <>
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
  </>
);

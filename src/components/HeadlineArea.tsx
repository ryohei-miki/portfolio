import { Heading, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  heading: string;
  description: ReactNode;
};

export const HeadlineArea: React.FC<Props> = ({
  heading,
  description,
}: Props) => (
  <>
    <Heading as="h2" textStyle="h2" fontSize="3xl">
      {heading}
    </Heading>
    <Text mt="4" fontSize="lg" lineHeight={1.8}>
      {description}
    </Text>
  </>
);

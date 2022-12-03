import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Work() {
  const router = useRouter();
  const { title } = router.query;
  return (
    <>
      <Heading as="h1" textStyle="h2" fontSize="3xl">
        {title}
      </Heading>
    </>
  );
}

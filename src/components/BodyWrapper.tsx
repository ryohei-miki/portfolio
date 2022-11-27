import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  child: ReactNode;
};

export const BodyWrapper: React.FC<Props> = ({ child }: Props) => {
  const bg = useColorModeValue("#fafafa", "#1E1E1E");

  return (
    <Box
      maxW="786px"
      minH="100vh"
      mx="auto"
      px={10}
      py={12}
      bg={bg}
      boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
    >
      {child}
    </Box>
  );
};

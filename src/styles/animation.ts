import { keyframes } from "@chakra-ui/react";

const flashKeyframe = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1;}
`;

export const flashAnimation = `${flashKeyframe} 1.5s linear infinite`;

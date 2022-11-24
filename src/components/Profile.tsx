import { HStack, Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { SnsLinks } from "components/SnsLinks";

export const Profile: React.FC = () => (
  <>
    <Box>
      <Avatar
        w={40}
        h={40}
        name="avatar"
        src="../../images/avatar.png"
        // showBorder
      />
    </Box>
    <HStack spacing={8} justifyContent="center" mt="8">
      <SnsLinks />
    </HStack>
  </>
);

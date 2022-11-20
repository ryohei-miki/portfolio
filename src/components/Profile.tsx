import { HStack, Avatar } from "@chakra-ui/react";
import React from "react";
import { SnsLinks } from "components/SnsLinks";

export const Profile: React.FC = () => (
  <>
    <Avatar
      w={40}
      h={40}
      name="Dan Abrahmov"
      src="https://bit.ly/dan-abramov"
    />
    <HStack spacing={8} justifyContent="center" mt="8">
      <SnsLinks />
    </HStack>
  </>
);

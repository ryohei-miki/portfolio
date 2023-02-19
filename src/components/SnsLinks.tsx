import { Link } from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiTwitter, SiZenn } from "react-icons/si";

export const snsData = [
  {
    url: "https://github.com/ryohei-miki",
    icon: <SiGithub size={26} />,
  },
  {
    url: "https://twitter.com/rm_oshushi",
    icon: <SiTwitter size={26} />,
  },
  {
    url: "https://zenn.dev/rm",
    icon: <SiZenn size={26} />,
  },
];

export const SnsLinks: React.FC = () => (
  <>
    {snsData.map((item) => (
      <Link href={item.url} key={item.url} _hover={{ opacity: 0.6 }} isExternal>
        {item.icon}
      </Link>
    ))}
  </>
);

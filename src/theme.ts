import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const components = {
  Divider: {
    size: "3px",
  },
};

const fonts = {
  heading: "'Roboto Mono',cursive;",
  body: "'Roboto Mono','Sawarabi Gothic','monospace',sans-serif;",
};

const textStyles = {
  h1: {
    letterSpacing: "0.15rem",
  },
  h2: {
    position: "relative",
    letterSpacing: "0.2rem",
    noOfLines: 1,
  },
  headingPrefix: {
    color: "#C778DD",
    paddingRight: "2",
  },
};

const styles = {
  global: {
    body: {
      backgroundColor: "#191919",
      color: "#ffffff",
    },
  },
};

const theme = extendTheme({ components, textStyles, styles, colors, fonts });
export default theme;

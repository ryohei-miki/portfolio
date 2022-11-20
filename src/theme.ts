import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      base: "#C778DD",
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    org: {
      purple: "#C778DD",
      cyan: "#7CDBCB",
      red: "#E43777",
      navy: "#574EC1",
    },
  },
  components: {
    Divider: {
      size: "3px",
    },
  },
  fonts: {
    heading: "'Roboto Mono',cursive;",
    body: "'Roboto Mono','Sawarabi Gothic','monospace',sans-serif;",
  },
  textStyles: {
    h1: {
      letterSpacing: "0.15rem",
    },
    h2: {
      position: "relative",
      letterSpacing: "0.2rem",
      noOfLines: 1,
      _before: { content: `"/"`, color: "org.red", paddingRight: "3" },
    },
    h3: {
      position: "relative",
      letterSpacing: "0.2rem",
      fontSize: "2xl",
      _before: {
        content: `"#"`,
        color: "org.cyan",
        paddingRight: "3",
      },
      _after: {
        position: "absolute",
        top: "calc(50% - 1px)",
        right: 0,
        content: `""`,
        height: "1px",
        width: { base: "0px", sm: "40%" },
        backgroundColor: "org.cyan",
      },
    },
    headingPrefix: {
      color: "#C778DD",
      paddingRight: "2",
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#191919",
        color: "#ffffff",
      },
    },
  },
});

export default theme;

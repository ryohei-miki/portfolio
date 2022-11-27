import { ColorModeScript, theme } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@600;700&family=Roboto+Mono:ital,wght@0,400;1,300&family=Sawarabi+Gothic&display=swap"
            rel="stylesheet"
          />
          <meta
            property="description"
            content="三木のポートフォリオ。これを見れば全てがわかる。"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon.png"
          />
          <meta property="og:title" content="RM Portfolio" />
          <meta property="og:description" content="rmのポートフォリオです。" />
          <meta property="og:site_name" content="RM Portfolio" />
          <meta
            property="og:image"
            content={`${process.env.SITE_URL}/images/avatar.png`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

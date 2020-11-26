import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { I18nProvider } from "next-rosetta";
import { ThemeProvider } from "lib/themeContext";

import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <I18nProvider table={pageProps.table /* From getStaticProps */}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;

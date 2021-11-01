import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { I18nProvider } from "next-rosetta";
import { ThemeProvider } from "src/lib/themeContext";
import { SessionProvider } from "next-auth/react";

import "src/styles/index.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta
          name="google-site-verification"
          content="LwHtz5WsKyEAUxxczhhYopqzY0aP0wb108DdSteBVNo"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js Template</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#5046e5" />
      </Head>
      <I18nProvider table={pageProps.table /* From getStaticProps */}>
        <ThemeProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { I18nProvider } from "next-rosetta";
import { ThemeProvider } from "lib/themeContext";
import { Provider as AuthProvider } from "next-auth/client";

import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
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
          <AuthProvider
            // Provider options are not required but can be useful in situations where
            // you have a short session maxAge time. Shown here with default values.
            options={{
              // Client Max Age controls how often the useSession in the client should
              // contact the server to sync the session state. Value in seconds.
              // e.g.
              // * 0  - Disabled (always use cache value)
              // * 60 - Sync session state with server if it's older than 60 seconds
              clientMaxAge: 0,
              // Keep Alive tells windows / tabs that are signed in to keep sending
              // a keep alive request (which extends the current session expiry) to
              // prevent sessions in open windows from expiring. Value in seconds.
              //
              // Note: If a session has expired when keep alive is triggered, all open
              // windows / tabs will be updated to reflect the user is signed out.
              keepAlive: 0,
            }}
            session={session}
          >
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;

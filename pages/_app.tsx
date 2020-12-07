import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { I18nProvider } from "next-rosetta";
import { ThemeProvider } from "lib/themeContext";

import "styles/index.css";

const sendAnalytics = ({ name, value }) => {
  if (process.env.NEXT_PUBLIC_SEND_ANALYTICS) {
    const url = `https://qckm.io?m=${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`;

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url);
    } else {
      fetch(url, { method: "POST", keepalive: true });
    }
  } else {
    console.warn("The Analytcs feature is disabled");
  }
};

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      sendAnalytics(metric);
      break;
    case "LCP":
      sendAnalytics(metric);
      break;
    case "CLS":
      sendAnalytics(metric);
      break;
    // case "FID":
    //   sendAnalytics(metric);
    //   break;
    case "TTFB":
      sendAnalytics(metric);
      break;
    case "Next.js-hydration":
      sendAnalytics(metric);
      break;
    // case "Next.js-route-change-to-render":
    //   sendAnalytics(metric);
    //   break;
    // case "Next.js-render":
    //   sendAnalytics(metric);
    //   break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
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
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;

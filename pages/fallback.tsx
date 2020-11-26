import React from "react";
import Head from "next/head";
import FeatureSection from "components/sections/home-page/features-section";

const FallbackPage: React.FC = () => (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any route will fallback to this page</h2>
    <FeatureSection />
  </>
);

export default FallbackPage;

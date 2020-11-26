import React from "react";
import { GetStaticProps } from "next";
import { I18nProps } from "next-rosetta";
import LayoutPage from "components/ui/layout-page";
import HeroSection from "components/sections/animations-page/hero-section";
import FeatureSection from "components/sections/home-page/features-section";
import { MyLocale } from "../i18n";

const AnimationPage: React.FC = () => {
  return (
    <LayoutPage>
      <HeroSection />
      <FeatureSection />
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default AnimationPage;

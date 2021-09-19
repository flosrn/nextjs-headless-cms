import React from "react";
import { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import { MyLocale } from "i18n/index";
import FeatureSection from "components/sections/home-page/features-section";
import HeroSection from "components/sections/home-page/hero-section";
import LayoutPage from "components/ui/layout-page";

const FallbackPage: React.FC = () => {
  const { t } = useI18n<MyLocale>();
  return (
    <LayoutPage>
      <HeroSection t={t("home.hero")} />
      <FeatureSection />
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default FallbackPage;

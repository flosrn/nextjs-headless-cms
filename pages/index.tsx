import React from "react";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import LayoutPage from "components/ui/layout-page";
import HeroSection from "components/sections/home-page/hero-section";

import { MyLocale } from "../i18n";

const HomePage: React.FC = () => {
  const { t } = useI18n<MyLocale>();

  return (
    <LayoutPage side>
      <HeroSection t={t("home.hero")} />
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default HomePage;

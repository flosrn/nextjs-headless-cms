import React from "react";
import { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import LayoutPage from "components/ui/layout-page";
import GithubDarkmodeDesign from "components/ui/github-darkmode-design";
import HeroSection from "components/sections/design-page/hero-section";
import DemoProductSection from "components/sections/design-page/demo-product-section";
import { MyLocale } from "i18n/index";

const DesignPage: React.FC = () => {
  const { t } = useI18n<MyLocale>();

  return (
    <LayoutPage>
      <GithubDarkmodeDesign />
      <HeroSection t={t("design.hero")} />
      <DemoProductSection />
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default DesignPage;

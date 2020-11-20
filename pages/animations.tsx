import React from "react";
import LayoutPage from "components/ui/layout-page";
import HeroSection from "components/sections/animations-page/hero-section";
import FeatureSection from "components/sections/home-page/features-section";

const AnimationPage: React.FC = () => {
  return (
    <LayoutPage>
      <HeroSection />
      <FeatureSection />
    </LayoutPage>
  );
};

export default AnimationPage;

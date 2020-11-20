import React from "react";
import LayoutPage from "components/ui/layout-page";
import HeroSection from "components/sections/home-page/hero-section";

const HomePage: React.FC = () => {
  return (
    <LayoutPage side>
      <HeroSection />
    </LayoutPage>
  );
};

export default HomePage;

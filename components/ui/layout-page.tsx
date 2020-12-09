import React, { useState } from "react";
import Header from "components/ui/header";
import MobileMenu from "components/ui/mobile-menu";
import Polygon from "components/ui/polygon";
import GithubDarkmodeDesign from "components/ui/github-darkmode-design";

export interface LayoutPageProps {
  side?: boolean;
  children: React.ReactNode;
}
const LayoutPage: React.FC<LayoutPageProps> = ({ side, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 ${
          side ? "lg:max-w-2xl" : ""
        } lg:w-full lg:pb-28 xl:pb-32`}
      >
        {side && <Polygon />}

        <Header openHandler={() => setIsOpen(!isOpen)} side={side} />
        <MobileMenu isOpen={isOpen} openHandler={() => setIsOpen(false)} />
        <GithubDarkmodeDesign />

        {children}
      </div>
    </div>
  );
};

export default LayoutPage;

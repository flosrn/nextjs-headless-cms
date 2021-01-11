import React, { useState, useEffect } from "react";
import Header from "components/ui/header";
import Footer from "components/ui/footer";
import SidebarMenu from "components/ui/sidebar-menu";
import { stopVerticalScroll } from "utils/functions";

export interface Props {
  children: React.ReactNode;
  isMobile: boolean;
}
const LayoutAccountPage: React.FC<Props> = ({ children, isMobile }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    stopVerticalScroll(isOpen);
  }, [isOpen]);

  return (
    <div>
      <div className="relative z-10 bg-white dark:bg-gray-900 lg:w-full mt-16 md:mt-20 overflow-x-hidden">
        <Header openHandler={() => setIsOpen(!isOpen)} />
        <SidebarMenu isOpen={!isMobile || isOpen} alwaysOpen={!isMobile} />
        <div className={!isMobile ? "w-5/6 ml-80" : ""}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutAccountPage;

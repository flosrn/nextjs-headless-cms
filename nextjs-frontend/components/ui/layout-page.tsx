import React, { useState, useEffect } from "react";
import Header from "components/ui/header";
import Footer from "components/ui/footer";
import SidebarMenu from "components/ui/sidebar-menu";
import { stopVerticalScroll } from "utils/functions";

export interface LayoutPageProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}
const LayoutPage: React.FC<LayoutPageProps> = ({ children, hideFooter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    stopVerticalScroll(isOpen);
  }, [isOpen]);

  return (
    <div>
      <div className="relative z-50 bg-white dark:bg-gray-900 lg:w-full mt-16 md:mt-20 overflow-x-hidden">
        <Header openHandler={() => setIsOpen(!isOpen)} />
        <SidebarMenu isOpen={isOpen} openHandler={() => setIsOpen(false)} />
        {children}
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default LayoutPage;

import React, { useState } from "react";
// import Image from "next/image";
import Header from "components/ui/header";
import MobileMenu from "components/ui/mobile-menu";
import Polygon from "components/ui/polygon";

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

        {children}

        {/*{side && (*/}
        {/*  <div className="h-56 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">*/}
        {/*    <Image*/}
        {/*      className="w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full object-cover"*/}
        {/*      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"*/}
        {/*      alt="cover"*/}
        {/*      // width="669"*/}
        {/*      // height="622"*/}
        {/*      layout="fill"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default LayoutPage;
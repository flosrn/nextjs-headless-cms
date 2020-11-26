import React from "react";
import Links from "components/ui/links";
import Logo from "components/ui/logo";
import HamburgerMenu from "components/ui/hamburger-menu";
import Locales from "components/ui/locales";
import SwitchButton from "components/ui/switch-button";

interface HeaderProps {
  openHandler: () => void;
  side: boolean;
}

const Header: React.FC<HeaderProps> = ({ openHandler, side }) => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className={`relative flex items-center justify-between sm:h-10 ${
          side ? "lg:justify-start" : ""
        }`}
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Logo />
            <Links />
            <HamburgerMenu openHandler={openHandler} />
          </div>
        </div>
        <div className="flex">
          <Locales />
          <div className="relative bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="hidden md:flex items-center justify-center w-full max-w-xs mx-auto ml-8">
                <SwitchButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;

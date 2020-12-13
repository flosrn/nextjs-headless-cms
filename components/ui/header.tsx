import React from "react";
import Links from "components/ui/links";
import Logo from "components/ui/logo";
import HamburgerMenu from "components/ui/hamburger-menu";
import Locales from "components/ui/locales";

interface HeaderProps {
  openHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ openHandler }) => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Logo />
            <Links />
            <HamburgerMenu openHandler={openHandler} />
          </div>
        </div>
        <div className="flex">
          <Locales />
        </div>
      </nav>
    </div>
  );
};
export default Header;

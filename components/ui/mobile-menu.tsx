import React from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Logo from "components/ui/logo";
import Links from "components/ui/links";
import CloseMobileMenu from "components/ui/close-mobile-menu";
import Locales from "components/ui/locales";

interface MobileMenuProps {
  isOpen: boolean;
  openHandler: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, openHandler }) => {
  return (
    <Transition
      show={isOpen}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <Logo />
            <CloseMobileMenu openHandler={openHandler} />
          </div>
          <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <Links isMobile />
            <div role="none">
              <Link href="/">
                <a
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  role="menuitem"
                >
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
export default MobileMenu;

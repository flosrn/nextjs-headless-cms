import React from "react";
import Locales from "components/ui/locales";
import SwitchButton from "components/ui/switch-button";

interface CloseMobileMenuProps {
  openHandler: () => void;
}

const CloseMobileMenu: React.FC<CloseMobileMenuProps> = ({ openHandler }) => {
  return (
    <div className="-mr-2 flex items-center">
      <Locales isMobile />
      <SwitchButton />
      <button
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={openHandler}
      >
        <span className="sr-only">Close main menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CloseMobileMenu;

import React from "react";

interface Props {
  openHandler: () => void;
}

const SidebarButton: React.FC<Props> = ({ openHandler }) => {
  return (
    <div className="absolute pr-5 h-full flex items-center md:hidden border-r border-gray-600">
      <button
        type="button"
        className=" inline-flex items-center justify-center text-gray-400 focus:outline-none"
        id="main-menu"
        aria-haspopup="true"
        onClick={openHandler}
      >
        <span className="sr-only">Open sidebar menu</span>
        <svg
          className="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarButton;

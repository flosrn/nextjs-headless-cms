import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const list = [
  { url: "/", name: "Accueil" },
  { url: "/design", name: "Design" },
  { url: "/animations", name: "Animations" },
  { url: "/blog", name: "Blog" },
];

interface LinksProps {
  isMobile?: boolean;
}

const Links: React.FC<LinksProps> = ({ isMobile }) => {
  const { pathname } = useRouter();
  return (
    <div
      className={`${
        isMobile ? "px-2 pt-2 pb-3 space-y-1" : "hidden md:block md:ml-10 md:pr-4 md:space-x-8"
      }`}
    >
      {list.map((link: { url: string; name: string }) => (
        <Link href={link.url} key={link.name}>
          <a
            className={`${
              isMobile
                ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                : ""
            } font-medium text-gray-500 hover:text-gray-900 ${
              pathname === link.url ? "text-indigo-600 hover:text-indigo-500" : ""
            }`}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;

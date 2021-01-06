import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useI18n } from "next-rosetta";
import { MyLocale } from "i18n";

interface LinksProps {
  isMobile?: boolean;
}

const Links: React.FC<LinksProps> = ({ isMobile }) => {
  const { pathname } = useRouter();
  const { t } = useI18n<MyLocale>();

  const links = [
    { href: "/", label: t("links.link1") },
    { href: "/design", label: t("links.link2") },
    { href: "/animations", label: t("links.link3") },
    { href: "/blog", label: t("links.link4") },
  ];

  return (
    <div
      className={`${
        isMobile ? "px-2 pt-2 pb-3 space-y-1" : "hidden md:block md:ml-10 md:pr-4 md:space-x-8"
      }`}
    >
      {links.map((link: { href: string; label: string }) => (
        <Link href={link.href} key={link.label}>
          <a
            className={`${
              isMobile
                ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-50"
                : ""
            } font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 ${
              pathname === link.href
                ? "text-indigo-600 dark:text-pink-500 hover:text-indigo-500 dark:hover:text-pink-700"
                : ""
            }`}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;

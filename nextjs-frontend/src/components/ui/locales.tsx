import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LocalesProps {
  isMobile?: boolean;
}

const Locales: React.FC<LocalesProps> = ({ isMobile }) => {
  const { locale, locales, route } = useRouter();
  return (
    <ul
      className={`${
        isMobile ? "flex" : "hidden md:flex ml-16"
      } justify-center items-center flex-row`}
    >
      {locales?.map((loc) => (
        <li key={loc} className="px-1">
          <Link href={route} locale={loc}>
            <a
              className={`text-gray-300 dark:text-white dark:hover:text-gray-400 uppercase ${
                isMobile ? "dark:text-gray-300" : ""
              } ${
                loc === locale ? "text-indigo-500 dark:text-pink-500 dark:hover:text-pink-700" : ""
              }`}
            >
              {loc}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Locales;

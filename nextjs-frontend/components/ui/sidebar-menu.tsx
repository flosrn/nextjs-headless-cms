import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "next-rosetta";
import { MyLocale } from "i18n/index";
import { isLinkActive } from "utils/constants";
import { signOut } from "next-auth/client";

interface Props {
  isOpen?: boolean;
  openHandler?: () => void;
  alwaysOpen?: boolean;
}

const SidebarMenu: React.FC<Props> = ({ isOpen, alwaysOpen }) => {
  const { pathname } = useRouter();
  const { t } = useI18n<MyLocale>();

  const links = [
    {
      href: "/",
      label: t("links.link1"),
      icon: (
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      ),
    },
    {
      href: "/design",
      label: t("links.link2"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      ),
    },
    {
      href: "/animations",
      label: t("links.link3"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      href: "/blog",
      label: t("links.link4"),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      ),
    },
  ];

  const sidebarVariants = {
    closed: {
      x: alwaysOpen ? 0 : "-100vw",
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.25,
        // stiffness: 10,
        // restDelta: 2,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        type: "tween",
        ease: "easeInOut",
        // delay: 0.25,
        duration: 0.35,
        // stiffness: 60,
        // restDelta: 2
        // damping: 40
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-10 flex w-full h-screen md:w-1/6 p-5 bg-gray-800 overflow-y-hidden"
          key="menu"
          initial="closed"
          animate="open"
          exit="exit"
          variants={sidebarVariants}
        >
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                Pages
              </span>
            </li>
            <li className="my-px">
              {links.map((link: { href: string; label: string; icon: React.ReactNode }) => {
                return (
                  <Link href={link.href} key={link.href}>
                    <a
                      className={`flex flex-row items-center h-12 px-4 my-2 rounded-lg ${
                        isLinkActive({ pathname, href: link.href })
                          ? "text-gray-600 bg-gray-100"
                          : "text-gray-500 hover:bg-gray-700"
                      }`}
                    >
                      <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          {link.icon}
                        </svg>
                      </span>
                      <span className="ml-3">{link.label}</span>
                    </a>
                  </Link>
                );
              })}
            </li>
            {/* <li className="my-px"> */}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"*/}
            {/*  >*/}
            {/*    <span className="flex items-center justify-center text-lg text-gray-500">*/}
            {/*      <svg*/}
            {/*        fill="none"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*        strokeWidth={2}*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        stroke="currentColor"*/}
            {/*        className="h-6 w-6"*/}
            {/*      >*/}
            {/*        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    <span className="ml-3">Clients</span>*/}
            {/*    <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">*/}
            {/*      1k*/}
            {/*    </span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="my-px">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"*/}
            {/*  >*/}
            {/*    <span className="flex items-center justify-center text-lg text-gray-500">*/}
            {/*      <svg*/}
            {/*        fill="none"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*        strokeWidth={2}*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        stroke="currentColor"*/}
            {/*        className="h-6 w-6"*/}
            {/*      >*/}
            {/*        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    <span className="ml-3">Tasks</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="my-px">*/}
            {/*  <a*/}
            {/*    href="#"*/}
            {/*    className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"*/}
            {/*  >*/}
            {/*    <span className="flex items-center justify-center text-lg text-green-400">*/}
            {/*      <svg*/}
            {/*        fill="none"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*        strokeWidth={2}*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        stroke="currentColor"*/}
            {/*        className="h-6 w-6"*/}
            {/*      >*/}
            {/*        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    <span className="ml-3">Add new</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                Account
              </span>
            </li>
            <li className="my-px">
              <Link href="/account/profile">
                <a
                  className={`flex flex-row items-center h-12 px-4 rounded-lg ${
                    pathname === "/account/profile"
                      ? "text-gray-600 bg-gray-100"
                      : "text-gray-500 hover:bg-gray-700"
                  }`}
                >
                  <span className="flex items-center justify-center text-lg text-gray-500">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span className="ml-3">Profile</span>
                </a>
              </Link>
            </li>
            <li className="my-px">
              <Link href="/account/user-info">
                <a
                  className={`flex flex-row items-center h-12 px-4 rounded-lg ${
                    pathname === "/account/user-info"
                      ? "text-gray-600 bg-gray-100"
                      : "text-gray-500 hover:bg-gray-700"
                  }`}
                >
                  <span className="flex items-center justify-center text-lg text-gray-500">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </span>
                  <span className="ml-3">User information</span>
                  <span className="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">
                    10
                  </span>
                </a>
              </Link>
            </li>
            <li className="my-px">
              <a className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="ml-3">Settings</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="/api/auth/signout"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarMenu;

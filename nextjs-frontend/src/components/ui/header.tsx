import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import Links from "components/ui/links";
import Logo from "components/ui/logo";
import Locales from "components/ui/locales";
import MenuButton from "components/ui/menu-button";
import SidebarButton from "components/ui/sidebar-button";

interface HeaderProps {
  openHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ openHandler }) => {
  const [session] = useSession();
  console.log("session : ", session);
  const { query } = useRouter();
  return (
    <div className="fixed z-50 bg-white dark:bg-gray-900 w-full border-b border-gray-600 top-0 py-3 md:py-5 px-5 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between sm:h-10" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="hidden md:block">
              <Logo />
            </div>
            <Links />
            <SidebarButton openHandler={openHandler} />
          </div>
        </div>
        <div className="flex">
          <Locales />
          {!session ? (
            <>
              {query?.form === "signup" ? (
                <Link href="/auth/signin?form=signin">
                  <a className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ml-8">
                    Sign in
                  </a>
                </Link>
              ) : (
                <Link href="/auth/signin?form=signup">
                  <a className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ml-8">
                    Sign up
                  </a>
                </Link>
              )}
            </>
          ) : (
            <>
              {session?.user && (
                <MenuButton
                  image={session.user?.image}
                  headMenu={
                    <>
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                        {session.user.email || session.user.name}
                      </p>
                    </>
                  }
                  items={[
                    { href: "/account/profile", label: "Account settings" },
                    { href: "#", label: "Support" },
                    { href: "/auth-features", label: "New feature (soon)" },
                    { href: "#", label: "License" },
                  ]}
                  footerMenu={{
                    item: {
                      href: "/api/auth/signout",
                      label: "Sign out",
                      clickHandler: (e) => {
                        e.preventDefault();
                        signOut();
                      },
                    },
                  }}
                />
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

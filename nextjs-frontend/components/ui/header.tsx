import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Links from "components/ui/links";
import Logo from "components/ui/logo";
import HamburgerMenu from "components/ui/hamburger-menu";
import Locales from "components/ui/locales";
import MenuButton from "components/ui/menu-button";

interface HeaderProps {
  openHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ openHandler }) => {
  const [session, loading] = useSession();
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
          {!loading && (
            <>
              {!session ? (
                <a
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ml-8"
                  href="/api/auth/signin"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              ) : (
                <>
                  {session?.user?.image && (
                    <MenuButton
                      image={session.user.image}
                      headMenu={
                        <>
                          <p className="text-sm leading-5">Signed in as</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                            {session.user.email || session.user.name}
                          </p>
                        </>
                      }
                      items={[
                        { href: "/account-settings", label: "Account settings" },
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
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

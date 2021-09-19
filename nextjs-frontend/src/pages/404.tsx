import React from "react";
import LayoutPage from "components/ui/layout-page";
import Image from "next/image";
import { GetStaticProps } from "next";
import { I18nProps } from "next-rosetta";
import { MyLocale } from "i18n/index";

const ErrorPage: React.FC = () => {
  return (
    <LayoutPage>
      <section className="mt-3 md:mt-5 mx-auto max-w-7xl px-4  sm:px-6  lg:px-8 ">
        <div className="text-center flex flex-col items-center">
          <h1 className="flex flex-col justify-center items-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block dark:text-gray-100 text-3xl md:text-4xl">PAGE NOT FOUND :(</span>
            <span className="block dark:text-gray-100 font-light w-10/12 sm:w-3/4 mt-20 text-2xl md:text-3xl">
              The requested page could not be found.
            </span>
          </h1>
          <div className="">
            <Image src="/images/travolta.gif" width={490} height={476} />
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default ErrorPage;

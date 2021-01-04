import React from "react";
import Link from "next/link";

interface HeroSectionProps {
  t: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section className="mt-3 md:mt-5 mx-auto max-w-7xl px-4  sm:px-6  lg:px-8 ">
      <div className="text-center flex flex-col items-center">
        <h1 className="flex flex-col justify-center items-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block dark:text-gray-100">{t.title?.line1}</span>
          <span className="block text-gsap rainbow-progress w-10/12 sm:w-3/4">
            {t.title?.line2}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-white sm:mt-5 sm:text-lg  md:text-xl w-100 md:w-1/2">
          {t.subtitle?.line1}
        </p>
        <p className="mt-3 text-base text-gray-500 dark:text-white sm:mt-5 sm:text-lg md:text-xl w-100 md:w-1/2">
          {t.subtitle?.line2}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

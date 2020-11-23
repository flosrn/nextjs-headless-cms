import React from "react";
import Image from "next/image";

const DemoProductSection: React.FC = () => {
  return (
    <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="flex rounded-2xl overflow-hidden shadow-lg">
        <div className="flex-none w-48 relative">
          <Image
            src="/images/classic-utility-jacket.jpg"
            alt="Jacket"
            className="absolute inset-0 w-full h-full object-cover"
            width="192"
            height="256"
          />
        </div>
        <form className="w-full flex-auto items-baseline p-6">
          <div className="flex flex-wrap items-baseline">
            <h1 className="flex-auto text-xl font-bold">Classic Utility Jacket</h1>
            <div className="text-xl font-semibold text-gray-500">$110.00</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DemoProductSection;

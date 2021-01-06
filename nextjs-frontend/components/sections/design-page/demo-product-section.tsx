import React from "react";
import Image from "next/image";

const sizes = ["XS", "S", "M", "L", "XL"];

const DemoProductSection: React.FC = () => {
  return (
    <section className="mt-10 mb-56 mx-auto max-w-4xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="flex-none w-48 h-64 relative">
          <Image
            src="/images/classic-utility-jacket.jpg"
            alt="Jacket"
            className="relative inset-0 w-full h-auto"
            width="192"
            height="256"
            // layout="fill"
          />
        </div>
        <div className="w-full flex-auto items-baseline p-6">
          <div className="flex flex-wrap items-baseline">
            <h1 className="flex-auto text-xl font-bold">Classic Utility Jacket</h1>
            <div className="text-xl font-semibold text-gray-500">$110.00</div>
          </div>
          <div className="text-sm text-gray-400 mt-4">In stock</div>
          <ul className="my-5 flex">
            {sizes.map((el: string) => (
              <li
                key={el}
                className="w-9 h-9 bg-gray-100 text-xs flex-center font-medium cursor-pointer rounded-md mr-3"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DemoProductSection;

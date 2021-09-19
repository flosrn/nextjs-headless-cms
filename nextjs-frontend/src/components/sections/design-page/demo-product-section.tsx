import React from "react";
import Image from "next/image";

const sizes = ["XS", "S", "M", "L", "XL"];

const DemoProductSection: React.FC = () => {
  return (
    <section className="mt-10 mb-56 mx-auto max-w-4xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="flex flex-col md:flex-row md:flex-none bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full md:w-2/6 h-56 md:h-auto relative">
          <Image
            src="/images/classic-utility-jacket.jpg"
            alt="Jacket"
            className="absolute inset-0 w-full h-full object-cover object-top"
            layout="fill"
          />
        </div>
        <div className="w-full md:w-4/6  p-6">
          <div className="flex flex-wrap items-baseline">
            <h1 className="flex-auto text-xl font-bold">Classic Utility Jacket</h1>
            <div className="text-xl font-semibold text-gray-500">$110.00</div>
          </div>
          <div className="text-sm text-gray-400 mt-4">In stock</div>
          <ul className="my-5 flex justify-between items-center">
            <div className="flex">
              {sizes.map((el: string) => (
                <li
                  key={el}
                  className="w-9 h-9 bg-gray-100 text-xs flex-center font-medium cursor-pointer rounded-md mr-3"
                >
                  {el}
                </li>
              ))}
            </div>
            <div className="text-sm text-gray-500 underline items-end cursor-pointer">
              Size Guide
            </div>
          </ul>
          <div className="flex space-x-3">
            <button className="w-5/12 h-9 rounded-md bg-black text-white" type="submit">
              Buy now
            </button>
            <button
              className="w-5/12 h-9 rounded-md bg-white text-black border border-gray-300"
              type="button"
            >
              Add to bag
            </button>
            <button
              className="flex-auto w-9 h-9 flex items-center justify-center rounded-md border border-gray-300"
              type="button"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <div className="text-sm  text-gray-500 mt-4">
            Free shipping on all continental US orders.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoProductSection;

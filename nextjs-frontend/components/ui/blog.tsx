import React, { useState } from "react";
import Image from "next/image";
import { dashboardURL } from "utils/constants";
import { IBlog } from "interfaces/blog";

interface Props extends IBlog {
  loadHandler?: () => void;
}

const Blog: React.FC<Props> = ({ title, excerpt, author, coverImage }) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  return (
    <div className="flex flex-col relative w-full rounded-2xl shadow-md bg-white">
      <div className={`${isLoaded ? "visible" : "invisible"}`}>
        {/* <Image
          src={`${dashboardURL}${coverImage?.formats?.small.url}`}
          width={coverImage?.formats?.small.width}
          height={coverImage?.formats?.small.height}
          alt={coverImage?.caption}
          onLoad={() => setLoaded(true)}
          className="object-cover rounded-2xl rounded-b-none h-48 w-full"
        /> */}
        <div className="flex flex-col justify-between h-auto">
          <div className="p-6">
            <div className="text-indigo-600 text-md">Blog</div>
            <div className="py-2 text-xl font-semibold">{title}</div>
            <div className="text-gray-400 text-lg">{excerpt}</div>
          </div>
          <div className="p-6 flex bottom-8">
            <div className="flex flex-col w-11 h-11">
              {/* <Image
                src={`${dashboardURL}${author?.picture?.formats.thumbnail.url}`}
                width={50}
                height={50}
                alt={author?.picture?.caption}
                className="object-cover w-full h-full rounded-full"
              /> */}
            </div>
            <div className="ml-4">
              <div className="">{author?.name}</div>
              <div className="text-gray-400 text-sm">Mar 16, 2020 . 6 min read</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          !isLoaded ? "block" : "hidden"
        } w-full h-full border-2 border-gray-200 rounded-lg overflow-hidden absolute`}
      >
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center" />
        <div className="p-6">
          <div className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2" />
          <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400" />
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400" />
          <div className="flex items-center flex-wrap ">
            <div className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0" />
            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

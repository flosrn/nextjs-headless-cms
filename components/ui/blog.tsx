import React from "react";
import { dashboardURL } from "utils/constants";

interface BlogProps {
  title: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  coverImage: {
    url: string;
  };
}

const Blog: React.FC<BlogProps> = ({ title, author, coverImage }) => {
  return (
    <div className="flex relative w-full md:w-1/2 lg:w-1/3 px-4 py-6">
      <div className="flex flex-col w-full rounded-2xl shadow-md bg-white">
        <img
          src={`${dashboardURL}${coverImage?.url}`}
          alt="Blog card"
          className="object-cover rounded-2xl rounded-b-none h-48 w-full"
        />
        <div className="flex flex-col justify-between h-auto">
          <div className="p-6">
            <div className="text-indigo-600 text-md">Blog</div>
            <div className="py-2 text-xl font-semibold">{title}</div>
            <div className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non neque in velit
              suscipit ornare in vel purus. In scelerisque, nibh quis imperdiet tempus.
            </div>
          </div>
          <div className="p-6 flex bottom-8">
            <div className="flex flex-col w-11 h-11">
              <img
                src={`${dashboardURL}${author?.picture?.url}`}
                alt="Author"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="">{author?.name}</div>
              <div className="text-gray-400 text-sm">Mar 16, 2020 . 6 min read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";

const ToolsSection: React.FC = () => {
  return (
    <div className="mt-56 bg-white relative">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="text-gray-200" points="2560 0 2560 100 0 100" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-20 lg:mt-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{ height: "95px", top: "-94px" }}
                >
                  <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current" />
                </svg>
                <h4 className="text-xl font-bold text-white">Great for your awesome project</h4>
                <p className="text-md font-light mt-2 text-white">
                  With this starter kit you can easily start a project and adapt it for your
                  personal use case. The many features provided are designed to save you development
                  time at the start of your project.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <img
                        src="https://github.com/Flosrn/Flosrn/blob/main/assets/nextjs-logo.png?raw=true"
                        alt="Next.js logo"
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Next.js</h6>
                    <p className="mb-4 text-gray-600">
                      Next.js is a React framework for developing single page Javascript
                      applications.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-drafting-compass"></i>
                      <img
                        src="https://github.com/Flosrn/Flosrn/blob/main/assets/strapi-logo.svg?raw=true"
                        alt="Strapi logo"
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Strapi</h6>
                    <p className="mb-4 text-gray-600">
                      Strapi is the leading open-source headless CMS. It’s 100% Javascript, fully
                      customizable and developer-first.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-newspaper"></i>
                      <img
                        src="https://github.com/Flosrn/Flosrn/blob/main/assets/tailwindcss-logo.png?raw=true"
                        alt="Tailwind CSS logo"
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Tailwind CSS</h6>
                    <p className="mb-4 text-gray-600">
                      Tailwind CSS is a utility-first CSS framework for rapidly building custom user
                      interfaces.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <img
                        src="https://raw.githubusercontent.com/graphql-compose/graphql-compose/master/docs/logo.png"
                        alt="GraphQL logo"
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">GraphQL</h6>
                    <p className="mb-4 text-gray-600">
                      GraphQL is an open-source data query and manipulation language for APIs, and a
                      runtime for fulfilling queries with existing data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;

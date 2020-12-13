import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const GithubSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-700 overflow-hidden">
      <div className="container mx-auto pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64 z-10">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <FontAwesomeIcon icon={faCodeBranch} className="text-xl" />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">Open Source</h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500">
              <a href="https://tailwindcss.com/" className="text-gray-400" target="_blank">
                Nextjs Headless CMS starter kit
              </a>{" "}
              is an open source project. You can give this version a try to feel the design and also
              test the quality of the code!
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">
              Get it free on Github and please help me spread the news with a Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/tailwind-starter-kit"
              target="_blank"
              className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
            >
              Github Star
            </a>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-800"
              style={{
                fontSize: "55em",
                position: "absolute",
                top: "-150px",
                right: "-100%",
                left: "auto",
                opacity: ".8",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;

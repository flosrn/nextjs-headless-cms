import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0px)" }}
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
          <polygon
            className="text-gray-300"
            points="2560 0 2560 100 0 100"
            style={{ fill: "#fff" }}
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find me on any of these platforms, feel free to contact me.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} className="flex" />
              </button>
              <button
                className="bg-white text-pink-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} className="flex" />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} className="flex" />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} className="flex" />
              </button>
            </div>
            <p className="text-sm mt-6 text-gray-600 font-semibold">Currently v0.0.1</p>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <Link href="/">
                    <a className="text-gray-400 hover:text-pink-500 block pb-2 text-sm">Home</a>
                  </Link>
                  <Link href="/blog">
                    <a className="text-gray-400 hover:text-pink-500 block pb-2 text-sm">Blog</a>
                  </Link>
                  <li>
                    <a
                      className="text-gray-400 hover:text-pink-500 block pb-2 text-sm"
                      href="https://github.com/Flosrn/nextjs-headless-cms-starter-kit"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-pink-500 block pb-2 text-sm"
                      href="#"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-pink-500 block pb-2 text-sm"
                      href="#"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-pink-500 block pb-2 text-sm"
                      href="#"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-pink-500 block pb-2 text-sm"
                      href="#"
                      target="_blank"
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © 2020 Next.js Headless CMS Starter Kit by{" "}
              <a
                href="https://github.com/Flosrn"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                Flosrn
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

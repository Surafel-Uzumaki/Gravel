import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      
      <footer className="bg-brown-900  bg-cover bg-center text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-6 lg:py-8">
          <div className="flex flex-col items-center">
            <a href="#" className="mb-8 inline-block max-w-full">
            <span className="uppercase text-lg font-bold px-4 text-white font-serif ">
        Gravel
      </span>
            </a>
            <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <ScrollLink
            to="navbar"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 px-2 md:px-4 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 px-2 md:px-4 cursor-pointer"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="case-study"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 px-2 md:px-4 cursor-pointer"
          >
            Case Study
          </ScrollLink>
            </div>
            <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
            <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
              <a
                href="#"
                className="ifont-bold mx-auto flex max-w-[24px] flex-col"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col font-bold"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="ifont-bold mx-auto flex max-w-[24px] flex-col"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col font-bold"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div>
            <p className="max-[479px]:text-sm">
              © Copyright {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-2 hidden sm:block text-gray-300 text-sm md:text-base">
            Pranav Krishnan B - Portfolio
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-sm md:text-base">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-sm md:text-base">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-sm md:text-base">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3 md:gap-5 items-center">
          <a
            href="mailto:bpranavkrishnan@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full transition duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-cyan-500 before:blur-md before:opacity-50 before:animate-gradient-flow hover:animate-glow text-xs md:text-sm"
          >
            <span className="relative z-10">Hire me now!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-50 blur-md animate-gradient-flow"></div>
          </a>
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center mt-2">
        <div className="flex items-center justify-between w-full max-w-[300px] border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer text-xs">
            About me
          </a>
          <a href="#skills" className="cursor-pointer text-xs">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer text-xs">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

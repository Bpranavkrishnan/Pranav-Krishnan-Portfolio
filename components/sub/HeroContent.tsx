"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 sm:mt-48 md:mt-44 w-full z-[20] relative" // Added relative positioning
    >
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      {/* Welcome Box */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-sm">Fullstack Developer Portfolio</h1>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-4 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[700px]"
      >
        <span className="flex flex-wrap">
        Hi! I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-2">
          {Array.from("Pranav Krishnan").map((char, index) => (
          <motion.span
            key={index}
            initial={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0)" }}
            animate={{
            textShadow: [
              "0px 0px 5px rgba(255, 255, 255, 0.5)",
              "0px 0px 10px rgba(255, 255, 255, 1)",
              "0px 0px 5px rgba(255, 255, 255, 0.5)",
            ],
            }}
            transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
            }}
          >
            {char}
          </motion.span>
          ))}
        </span>
        </span>
        <span className="text-2xl md:text-4xl">A Full Stack Developer</span>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-full md:max-w-[600px]"
      >
        I&apos;m a MERN Full Stack Developer passionate about crafting web,
        mobile, and AI-powered solutions. Explore my projects to see how I
        blend tech with creativity.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        <motion.a
        variants={slideInFromLeft(1)}
        className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-3xl max-w-full sm:max-w-[300px] bg-gradient-to-r from-purple-500 to-cyan-500"
        onClick={() => setShowMore(!showMore)}
        >
        {showMore ? "Show Less" : "Know More!"}
        </motion.a>
        <motion.a
        variants={slideInFromLeft(1.2)}
        href="https://drive.google.com/file/d/176IeLjd8siZm-VEmX8_IUQxQbmF3m39y/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6 button-secondary text-center text-white cursor-pointer rounded-3xl w-full sm:max-w-[300px] bg-gradient-to-r from-purple-500 to-cyan-500"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)",
        }}
        >
        Download CV
        </motion.a>
      </div>

      {/* Show More Content */}
      {showMore && (
        <motion.div
        variants={slideInFromLeft(0.5)}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
        onClick={() => setShowMore(false)}
        >
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-[95%] md:max-w-[800px] overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
          onClick={() => setShowMore(false)}
          className="absolute top-2 right-2 text-purple-500 hover:text-purple-700 font-bold text-lg"
          >
          ✕
          </button>
          <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-base md:text-lg text-gray-200"
          style={{
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          }}
          >
          {Array.from(
            `I specialize in building responsive, scalable, and aesthetic applications using modern technologies, with a primary focus on the MERN stack — MongoDB, Express.js, React.js, and Node.js. This stack allows me to create high-performance full-stack web applications that are both dynamic and secure. On the mobile side, I bring in my experience with Flutter, enabling me to develop cross-platform apps that offer seamless performance and beautiful interfaces on both Android and iOS devices.
        In addition to core development, I have a growing passion for integrating AI-based functionalities into my projects — whether it’s smart recommendations, dynamic data handling, or interactive features that adapt to the user. I’m constantly experimenting with emerging tools and libraries to make applications not just functional, but intelligent and futuristic.
        As a developer, I never stop learning. I’m constantly exploring new frameworks, testing emerging features, and staying updated with industry trends — because the tech world never stands still, and neither do I. My goal is to keep pushing boundaries, refining my craft, and building digital experiences that leave a lasting impact.`
          ).map((char, index) => (
            <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.02,
              delay: index * 0.01,
            }}
            style={{
              background:
              "linear-gradient(to right, rgb(94, 193, 226), rgb(94, 193, 226))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >
            {char}
            </motion.span>
          ))}
          </motion.p>
        </motion.div>
        </motion.div>
      )}
      </div>

      {/* Right Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-32 md:mt-0" // Increased margin-top for mobile
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600} // Adjusted height
          width={600} // Adjusted width
          className="max-w-[100%] md:max-w-[600px]" // Adjusted max-width for mobile
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

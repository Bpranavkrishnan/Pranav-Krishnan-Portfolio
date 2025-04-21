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
      className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]" // Reduced mt-32 to mt-28 to move contents up
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[13px]">
      Fullstack Developer Portfolio
      </h1>
      </motion.div>

      <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
      >
      <span className="flex">
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
      <span>A Full Stack Developer</span>
      </motion.div>

      <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
      I&apos;m A MERN Full Stack Developer passionate about crafting web, mobile, and AI-powered solutions.explore my projects to see how I blend tech with creativity.
      </motion.p>
      <div className="flex flex-row gap-10">
      <motion.a
      variants={slideInFromLeft(1)}
      className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-3xl max-w-[300px] bg-gradient-to-r from-purple-500 to-cyan-500"
      onClick={() => setShowMore(!showMore)}
      >
      {showMore ? "Show Less" : "Know More!"}
      </motion.a>
      <motion.a
      variants={slideInFromLeft(1.2)}
      href="https://drive.google.com/file/d/176IeLjd8siZm-VEmX8_IUQxQbmF3m39y/view?usp=drive_link"
      target="_blank" rel="noopener noreferrer"
      className="py-3 px-6 button-secondary text-center text-white cursor-pointer rounded-3xl max-w-[300px] bg-gradient-to-r from-purple-500 to-cyan-500"
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

      {showMore && (
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="absolute left-0 w-full bg-black bg-opacity-50 flex justify-start items-center p-5"
        style={{ top: "calc(100% - 135px)" }} // Adjusted position to make it further up
        onClick={() => setShowMore(false)} // Close on clicking outside
      >
        <motion.div
        variants={slideInFromLeft(0.7)}
        className="relative bg-transparent p-6 rounded-lg shadow-lg max-w-[98%] md:max-w-[1400px] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
        <button
        onClick={() => setShowMore(false)}
        className="absolute top-2 right-2 text-purple-500 hover:text-purple-700 font-bold text-lg"
        >
        ✕
        </button>
        <motion.p
        variants={slideInFromLeft(0.9)}
        className="text-lg text-gray-200"
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
        background: "linear-gradient(to right,rgb(94, 193, 226),rgb(94, 193, 226)",
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

      <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
      >
      <Image
        src="/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={690}
      />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

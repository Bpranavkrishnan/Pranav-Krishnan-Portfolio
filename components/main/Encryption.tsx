"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full translate-y-[-300px] sm:translate-y-[-250px] md:translate-y-[-220px]">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] sm:text-[35px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[0px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] sm:w-[45px] md:w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={80}
            height={80}
            className="z-10 w-[60px] sm:w-[70px] md:w-[80px]"
          />
        </div>

        <div className="Welcome-box px-[10px] sm:px-[12px] md:px-[15px] py-[3px] sm:py-[4px] z-[20] border my-[10px] sm:my-[12px] md:my-[15px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[11px] md:text-[12px]">
            Encryption
          </h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] sm:bottom-[15px] md:bottom-[20px] px-[5px]">
        <div className="cursive text-[18px] sm:text-[22px] md:text-[25px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full sm:w-[120%] md:w-[130%] sm:rotate-90 md:rotate-0 object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;

import Image from "next/image";
import React from "react";
import { ReactNode } from "react";

interface Props {
  src: string;
  title: ReactNode;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-md mx-auto sm:max-w-full sm:w-96 md:w-[28rem]">
      <Image
        src={src}
        alt={typeof title === "string" ? title : ""}
        width={700}
        height={700}
        className="w-full h-64 object-contain sm:h-72 md:h-80 opacity-70" // Added opacity class
        unoptimized
      />

      <div className="relative p-4 text-center">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

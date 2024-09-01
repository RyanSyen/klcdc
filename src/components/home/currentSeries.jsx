"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";

const CurrentSeries = () => {
  return (
    <div className="h-96 lg:h-[100vh] relative ">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={"/banner/armor_of_god.jpg"}
          alt="The Armor Of God Photo by Nik Shuliahin on Unsplash"
          fill
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full black-to-transparent-gradient" />
        <div className="absolute top-10 right-10 logoSubtitle cursor-default select-none">
          <div className="border-[3px] border-[#B0903D] text-[#B0903D] px-4 py-2 rounded-full text-xl lg:text-2xl uppercase">
            Current Series
          </div>
        </div>
        <div className="absolute top-[50%] left-10 inset-0 flex items-center text-white text-center px-4">
          <div className="max-w-xxl">
            <h1 className="text-3xl lg:text-5xl logoTitle capitalize">
              The Armor Of God (Ephesians 6)
            </h1>
            <div className="hidden md:block pt-2 text-xl lg:text-2xl mx-auto font-normal text-[#fcfcfc] text-left logoSubtitle">
              By Pastor Peter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSeries;

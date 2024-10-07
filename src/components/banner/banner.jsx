"use client";

import Image from "next/image";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  const words = ["GROW", "PRAY", "LEARN", "EXPERIENCE", "WORSHIP", "CELEBRATE"];

  return (
    <div className="h-[24rem] md:h-[100vh] relative">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={"/carousel/christmas.jpg"}
          alt="banner"
          fill
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full transparent-to-black-gradient" />
        <div className="absolute top-[50%] inset-0 flex items-center justify-center z-[2] text-white text-center px-4">
          <div className="max-w-xxl">
            <h1 className="text-3xl lg:text-5xl logoTitle capitalize">
              Kuala Lumpur Christian Disciples Church
            </h1>
            <div className="hidden md:block pt-2 text-xl lg:text-2xl mx-auto font-normal text-[#fcfcfc] text-left logoSubtitle">
              A Place To
              <FlipWords words={words} /> <br />
            </div>
          </div>
        </div>
        <div className="hidden absolute xs:bottom-10 bottom-11 w-full lg:flex justify-center items-center z-[3]">
          <Link href={"#currentSeries"}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

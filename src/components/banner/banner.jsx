import Image from "next/image";
import React from "react";
import { FlipWords } from "../ui/flip-words";

const Banner = () => {
  const words = ["GROW", "PRAY", "LEARN", "EXPERIENCE", "WORSHIP", "CELEBRATE"];

  return (
    <div className="h-96 lg:h-[100vh] relative">
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
      </div>
    </div>
  );
};

export default Banner;

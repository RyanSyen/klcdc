import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-96 lg:h-[100vh] relative ">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={"/carousel/christmas.jpg"}
          alt="banner"
          fill
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] bg-blend-multiply" />
        <div className="absolute top-[25%] inset-0 flex items-center justify-center z-[2] text-white text-center px-4">
          <div className="max-w-xxl">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Kuala Lumpur Christian Disciples Church
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

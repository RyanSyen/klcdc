"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import useCarousel from "./useCarousel";

const MainCarousel = () => {
  const { setApi, slideTo, current } = useCarousel();

  return (
    <Carousel
      setApi={setApi}
      className="flex flex-col w-full"
      plugins={[
        Autoplay({ delay: 5500, stopOnInteraction: false, jump: false }),
      ]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="w-full  min-h-96 pb-[50%] md:pb-[35%] relative">
              <Image
                className="w-full h-full object-cover"
                src={img.url}
                alt={img.name}
                fill
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 absolute pt-3 bottom-3 left-1/2">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => slideTo(img.id)}
            className={`w-2 h-2 p-1.5 cursor-pointer rounded-[50%]  ${
              current === img.id ? "bg-red-600" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default MainCarousel;

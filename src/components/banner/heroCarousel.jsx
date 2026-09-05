"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { FlipWords } from "../ui/flip-words";

const SLIDE_DURATION = 6000;

const HeroCarousel = ({ images }) => {
  const words = ["GROW", "PRAY", "LEARN", "EXPERIENCE", "WORSHIP", "CELEBRATE"];

  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const isRotating = !prefersReducedMotion && images.length > 1;

  useEffect(() => {
    if (!isRotating) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % images.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isRotating, images.length, current]);

  const slideTo = useCallback((index) => setCurrent(index), []);

  return (
    <div className="h-[24rem] md:h-[100vh] relative overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.2 }}
          >
            <Image
              className="object-cover"
              src={images[current].url}
              alt={images[current].alt || ""}
              sizes="100vw"
              fill
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full transparent-to-black-gradient z-[1]" />
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
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-12 lg:left-auto lg:right-10 lg:translate-x-0 flex gap-3 z-[3]">
            {images.map((image, index) => (
              <button
                key={image.url}
                type="button"
                onClick={() => slideTo(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={current === index}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  current === index
                    ? "bg-[#B0903D]"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
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

export default HeroCarousel;

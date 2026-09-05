"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";
import {
  cn,
  sectionContainer,
  sectionGap,
  sectionHeadingGap,
} from "@/lib/utils";
import SectionHeading from "@/components/sectionHeading";
import SectionWrapper from "@/components/sectionWrapper";

const SeriesCards = ({ series }) => {
  return (
    <div id="currentSeries" className="w-full bg-black py-20">
      <SectionHeading className="text-neutral-200">
        Current Series
      </SectionHeading>
      <div
        className={cn(
          sectionContainer,
          sectionGap,
          sectionHeadingGap,
          "grid grid-cols-1 md:grid-cols-3"
        )}
      >
        {series.map((item, index) => (
          <SeriesCard key={item.title} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const SeriesCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className="group overflow-hidden rounded-2xl border-2 border-[#B0903D]/40 bg-neutral-950 transition duration-300 hover:-translate-y-2 hover:border-[#B0903D]"
    >
      <div className="relative w-full aspect-[3/2]">
        <Image
          className="object-cover transition duration-500 group-hover:scale-105"
          src={data.imgUrl}
          alt={data.alt || data.title}
          sizes="(min-width: 768px) 33vw, 100vw"
          fill
        />
      </div>
      <div className="p-6">
        <h3 className="logoTitle text-2xl lg:text-3xl capitalize">
          {data.title}
        </h3>
        <div className="logoSubtitle pt-1 text-base lg:text-lg text-[#B0903D]">
          {data.pastor}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(SeriesCards);

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import { fadeIn } from "@/lib/motion";
import {
  cn,
  sectionContainer,
  sectionGap,
  sectionHeadingGap,
} from "@/lib/utils";
import SectionHeading from "@/components/sectionHeading";
import SectionWrapper from "@/components/sectionWrapper";

const MeetingTimesContent = ({ meetings }) => {
  return (
    <div className="w-full bg-black py-20">
      <SectionHeading className="text-neutral-200">Meeting Times</SectionHeading>
      <div
        className={cn(
          sectionContainer,
          sectionGap,
          sectionHeadingGap,
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {meetings.map((item, index) => {
          return <MeetingTimesCard key={item.title} data={item} index={index} />;
        })}
      </div>
    </div>
  );
};

const MeetingTimesCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#B0903D]/40 bg-neutral-950"
    >
      <div className="relative h-48 w-full">
        <Image
          src={data.imgUrl}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          fill
          className="object-cover"
          alt={data.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div>
          <h3 className="text-lg font-medium text-[#fcfcfc]">{data.title}</h3>
          {data.time && (
            <p className="pt-1 text-muted-foreground text-[#fcfcfc]">
              {data.time}
            </p>
          )}
        </div>
        {data.actionLink && (
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="z-10" asChild>
              <Link href={data.actionLink}>{data.actionTitle}</Link>
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(MeetingTimesContent);

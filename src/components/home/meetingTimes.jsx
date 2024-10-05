"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import SectionWrapper from "@/components/sectionWrapper";

const data = [
  {
    id: 0,
    title: "Prayer Meeting & Communion",
    time: "Sunday at 10:00 AM - 11:00 AM",
    desc: [
      "Prayer Meeting: Every 3rd and 5th Sunday",
      "Communion: Every 1st Sunday",
    ],
    imgUrl: "/home/communion.jpg",
  },
  {
    id: 1,
    title: "Main Service",
    time: "Sunday at 11:00 AM - 12:30 PM",
    desc: [
      "Translation sets available for English and Mandarin services",
      "Online Service via Zoom (Bilingual streams for English and Chinese)",
    ],
    actionLink:
      "https://us02web.zoom.us/j/82399594814?pwd=rCoiA0YCfQYI2KHw2eAkHZQSHtz33m.1",
    actionTitle: "Join Online",
    imgUrl: "/home/sunday-service.jpg",
  },
  {
    id: 2,
    title: "Youth Meeting",
    time: "Saturday at 4:00 PM - 6:00 PM",
    actionLink: "/youth-corner",
    actionTitle: "More Info",
    imgUrl: "/home/youth.jpg",
  },
  {
    id: 3,
    title: "Bible Study and Fellowship Groups",
    actionLink: "/bible-studies",
    actionTitle: "More Info",
    imgUrl: "/home/bible-study.jpg",
  },
];

const MeetingTimes = () => {
  return (
    <div className="w-full bg-black h-full py-20">
      {/* <h1 className="text-3xl lg:text-5xl logoSubtitle capitalize text-center">
        Meeting Times
      </h1> */}
      <h2 className="max-w-7xl pl-8 text-xl md:text-5xl font-bold text-neutral-200 font-sans text-center">
        Meeting Times
      </h2>
      <div className="flex justify-center items-center gap-8 py-8 flex-wrap">
        {data.map((item, index) => {
          return <MeetingTimesCard key={index} data={item} index={index} />;
        })}
      </div>
    </div>
  );
};

const MeetingTimesCard = ({ data, index }) => {
  return (
    <div className="w-[350px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="w-xs w-full border-[2px] rounded-xl">
          <div className="cursor-pointer overflow-hidden relative card rounded-md shadow-xl min-h-48 max-w-sm mx-auto backgroundImage flex flex-col justify-between">
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 rounded-xl"></div>
            <div className="w-full relative h-48 rounded-xl">
              <Image
                src={data.imgUrl}
                sizes="100%"
                fill
                className="rounded-lg object-cover"
                alt={data.title}
                priority
              />
            </div>
            <div className="flex flex-col justify-between p-4 min-h-44">
              <div>
                <h3 className="text-lg font-medium text-[#fcfcfc]">
                  {data.title}
                </h3>
                <p className="text-muted-foreground pb-1 text-[#fcfcfc]">
                  {data.time}
                </p>
              </div>
              {data.actionLink && (
                <div className="pt-2 md:pt-0 flex justify-end">
                  <Button variant="outline" size="sm" className="z-10">
                    <Link className="" href={data.actionLink}>
                      {data.actionTitle}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(MeetingTimes);

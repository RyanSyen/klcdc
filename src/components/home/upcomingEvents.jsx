import { promises as fs } from "fs";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import SectionHeading from "@/components/sectionHeading";

const UpcomingEvents = async () => {
  const file = await fs.readFile("public/data/upcoming_events.json", "utf8");
  const data = JSON.parse(file);
  const cards = data.map((card, index) => (
    <Card key={card.imgUrl} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <SectionHeading>Upcoming Events</SectionHeading>
      <Carousel items={cards} />
    </div>
  );
};

export default UpcomingEvents;

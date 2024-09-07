import { promises as fs } from "fs";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const UpcomingEvents = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/events.json",
    "utf-8"
  );
  const data = JSON.parse(file);
  const cards = data.map((card, index) => (
    <Card key={card.imgUrl} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Upcoming Events
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default UpcomingEvents;

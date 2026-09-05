import { promises as fs } from "fs";

import React from "react";

import HeroCarousel from "./heroCarousel";

const Banner = async () => {
  const file = await fs.readFile("public/data/hero_images.json", "utf8");
  const images = JSON.parse(file);

  return <HeroCarousel images={images} />;
};

export default Banner;

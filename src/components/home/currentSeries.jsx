import { promises as fs } from "fs";

import React from "react";

import SeriesCards from "./seriesCards";

const CurrentSeries = async () => {
  const file = await fs.readFile("public/data/series.json", "utf8");
  const series = JSON.parse(file);

  return <SeriesCards series={series} />;
};

export default CurrentSeries;

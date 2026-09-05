import { promises as fs } from "fs";

import React from "react";

import MeetingTimesContent from "./meetingTimesContent";

const MeetingTimes = async () => {
  const file = await fs.readFile("public/data/meeting_times.json", "utf8");
  const meetings = JSON.parse(file);

  return <MeetingTimesContent meetings={meetings} />;
};

export default MeetingTimes;

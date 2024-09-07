import Banner from "@/components/banner/banner";
import CurrentSeries from "@/components/home/currentSeries";
import MeetingTimes from "@/components/home/meetingTimes";
import UpcomingEvents from "@/components/home/upcomingEvents";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="h-20 bg-black" />
      <CurrentSeries />
      <MeetingTimes />
      {/* TODO: Worship section */}
      <UpcomingEvents />
    </>
  );
}

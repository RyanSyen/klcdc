import Banner from "@/components/banner/banner";
import CurrentSeries from "@/components/home/currentSeries";
import MeetingTimes from "@/components/home/meetingTimes";
import UpcomingEvents from "@/components/home/upcomingEvents";

export default function Home() {
  return (
    <>
      <Banner />
      <CurrentSeries />
      <MeetingTimes />
      {/* TODO: Worship section */}
      <UpcomingEvents />
    </>
  );
}

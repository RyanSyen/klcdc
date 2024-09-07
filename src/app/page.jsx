import Banner from "@/components/banner/banner";
import CurrentSeries from "@/components/home/currentSeries";
import MeetingTimes from "@/components/home/meetingTimes";
// import MainCarousel from "@/components/carousel/carousel";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="h-20 bg-black" />
      <CurrentSeries />
      <MeetingTimes />
      {/* <MainCarousel /> */}
    </>
  );
}

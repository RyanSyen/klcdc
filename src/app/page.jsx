import { Button } from "@/components/ui/button";
import Banner from "../components/banner/banner";
import Category from "../components/category/category";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CurrentSeries from "../components/home/currentSeries";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <BannerCarousel /> */}
      <Banner />
      <div className="h-20 bg-black" />
      <CurrentSeries />
      <Category />
      <div className="py-6 px-10">
        <MeetingTimes />
      </div>
    </>
  );
}

const MeetingTimes = () => {
  return (
    <section className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>
            <div id="MeetingTimes">Meeting Times</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between pb-2">
              <div>
                <h3 className="text-lg font-medium">
                  Prayer Meeting & Communion
                </h3>
                <p className="text-muted-foreground pb-1">
                  Sunday at 10:00 AM - 11:00 AM
                </p>
                <p className="text-muted-foreground">
                  Prayer Meeting: Every 3rd and 5th Sunday
                </p>
                <p className="text-muted-foreground">
                  Communion: Every 1st Sunday
                </p>
              </div>
            </div>
            <div className="md:flex items-center justify-between pb-2">
              <div>
                <h3 className="text-lg font-medium">Main Service</h3>
                <p className="text-muted-foreground pb-1">
                  Sunday at 11:00 AM - 12:30 PM
                </p>
                <p className="text-muted-foreground">
                  Translation sets available for English and Mandarin services
                </p>
                <p className="text-muted-foreground">
                  Online Service via Zoom (Bilingual streams for English and
                  Chinese)
                </p>
              </div>
              <div className="pt-2 md:pt-0">
                <Button variant="outline" size="sm">
                  <Link
                    href={
                      "https://us02web.zoom.us/j/82399594814?pwd=rCoiA0YCfQYI2KHw2eAkHZQSHtz33m.1"
                    }
                    target="_blank"
                  >
                    Join Online
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:flex items-center justify-between pb-2">
              <div>
                <h3 className="text-lg font-medium">Youth Meeting</h3>
                <p className="text-muted-foreground pb-1">
                  {" "}
                  Saturday at 4:00 PM - 6:00 PM
                </p>
              </div>
              <div className="pt-2 md:pt-0">
                <Button variant="outline" size="sm">
                  <Link href={"/youth-corner"}>More Info</Link>
                </Button>
              </div>
            </div>
            <div className="md:flex items-center justify-between pb-2">
              <h3 className="text-lg font-medium">
                Bible Study and Fellowship Groups
              </h3>
              <div className="pt-2 md:pt-0">
                <Button variant="outline" size="sm">
                  <Link href={"/bible-studies"}>More Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

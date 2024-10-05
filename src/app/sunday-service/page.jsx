import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SundayService = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="relative flex justify-center items-center h-[80vh]">
          <Image src={"https://images.unsplash.com/photo-1620565404581-e0aea3f826ef?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill className="object-cover" alt="contact us" />
        </div>
        <div className="pt-8">
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Sunday Service</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <b>Prayer Meeting & Communion: 10.00am - 11.00am</b> <br />
            Prayer Meeting:  Every 3rd and 5th Sunday <br />
            Communion:  Every 1st Sunday
          </div>
          <div>
            <b>Main Service : 11.00am - 12:30pm</b> <br />
            11:00am - Worship<br />
            11:30am - Sermon<br />
            <div className="pt-2">
              Zoom Service Link (Bilingual streams for English and Chinese) <br />
              <Button>
                <Link href={"https://us02web.zoom.us/j/82399594814?pwd=rCoiA0YCfQYI2KHw2eAkHZQSHtz33m.1"}>Join Online</Link>
              </Button>
            </div>
          </div>
          <div>
            <b>Sunday School: 11.00am - 12:30pm</b> <br />
            Children (Aged 8-12) <br />
            Youths (Aged 13-17)
          </div>
        </div>
      </div>
    </section>
  )
};

export default SundayService;

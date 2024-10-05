import Image from "next/image";

const YouthCorner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="relative flex justify-center items-center h-[80vh]">
          <Image src={"/navbar/youth-corner.png"} fill className="object-scale-down" alt="youth corner" />
        </div>
        <div className="pt-8">
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Youth Corner</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <b>We meet every Saturday at 4pm</b> <br />
            We would love to have you join us!
          </div>
          <div>
            <b>STANDARD ITINERARY</b> <br />
            4:00pm - Worship<br />
            4:30pm - Discussion / Bible Studies / Special Topics<br />
            5:30pm - Activities (Group Games, etc.)<br />
            6:00pm - End<br />
          </div>
          <div>
            <i>Come join us for the opportunity to learn the performing arts too 🙂 we also sing, dance, mime, jam, and shadow play. <br />
              We frequently do outings, camps and hikes as well!</i>
          </div>
        </div>
      </div>
    </section>
  )
};

export default YouthCorner;

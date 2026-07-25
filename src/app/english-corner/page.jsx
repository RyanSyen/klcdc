import Image from "next/image";

const EnglishCorner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="relative flex justify-center items-center h-[80vh]">
          <Image src={"/events/ec_tanjung_sepat_2024/WhatsApp Image 2024-12-28 at 4.13.33 PM.jpeg"} fill className="object-contain" alt="english corner" />
        </div>
        <div className="pt-8">
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">English Corner</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <b>Learn English through the Word of God</b> <br />
            We have Bible reading sessions to learn English through the Word of God, English comprehension exercises, and we incorporate life lessons along the way so learning goes beyond the language itself.
          </div>
          <div>
            <b>Speak with confidence</b> <br />
            We focus on verbal English communication, creating an environment where you can express yourself freely.
          </div>
          <div>
            <b>Learn and have fun</b> <br />
            We wind down each English Corner with fun games to reflect on what we have learned.
          </div>
          <div>
            <b>Who is it for?</b> <br />
            Pre-school to high school students &mdash; and parents are warmly welcomed to join in as well.
          </div>
          <div>
            <i>Almost every month we have an outing where we explore the outdoors and enjoy fun activities together. Come join us! 🙂</i>
          </div>
        </div>
      </div>
    </section>
  )
};

export default EnglishCorner;

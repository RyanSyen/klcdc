import Image from "next/image";
import Link from "next/link";

const BibleStudies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="relative flex justify-center items-center h-[80vh]">
          <Image src={"/navbar/bible-study.jpg"} fill className="object-scale-down" alt="bible studies" />
        </div>
        <div className="pt-8">
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Bible Studies</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <b>ENGLISH - ADULTS (Fridays 8:15pm)</b> <br />
            Contact: Pastor Peter (012-3564644)<br />
            Meeting via <Link className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500" href={"https://us02web.zoom.us/j/83873588428?pwd=ZGtEV3NqSVRiRWthRFJNQ2VMTWY4UT09"} target="_blank">Zoom</Link>
          </div>
          <div>
            <b>ENGLISH - YOUNG ADULTS/ COLLEGE AND UNIVERSITY STUDENTS</b> <br />
            A Free and Easy time of sharing, fellowship and Studying the Word of God <br />
            7:00pm - Dinner<br />
            8:00pm - Bible Study<br />
            Contact: Vern Yeoh (016-6128096)<br />
            * Contact Vern Yeoh for details on the location and date of English Young Adults bible study
          </div>
          <div>
            <b>CHINESE - MANDARIN</b> <br />
            Saturdays 星期六 10:00am<br />
            Contact: Pastor Angie (016-6599311) <br />
            Meeting via <Link className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500" href={"https://us02web.zoom.us/j/83873588428?pwd=ZGtEV3NqSVRiRWthRFJNQ2VMTWY4UT09"} target="_blank">Zoom</Link>
          </div>
          <div>
            <b>CHINESE - CANTONESE (ELDERLY)</b> <br />
            Tuesdays 星期二 10.00am<br />
            Contact: Pastor Angie (016-6599311) <br />
            (72, Jln Desa Bahagia, Taman Desa)
          </div>
        </div>
      </div>
    </section>
  )
};

export default BibleStudies;

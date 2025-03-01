

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HoverEffect } from "@/components/ui/card-hover-effect"

const Sports = () => {
  const tabs = [
    {
      title: "Badminton",
      value: "badminton",
      content: (
        <BadmintonContent />
      ),
    },
    {
      title: "Pickleball",
      value: "pickleball",
      content: (
        <PickleballContent />
      ),
    },
    {
      title: "Others",
      value: "others",
      content: (
        <OthersContent />
      ),
    }
  ]

  return (
    <Tabs defaultValue={tabs[0].value} className="py-20 px-8 flex flex-col justify-center items-center">
      <TabsList className="grid w-full grid-cols-3 max-w-[1000px]">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.value}>{tab.title}</TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value} className="flex justify-center items-center">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

const BadmintonContent = () => {
  return (
    <div className='max-w-[1000px]'>
      <Card>
        <CardHeader>
          <CardTitle className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Badminton</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <section className="py-4">
            <div>
              <Image src={"/sports/badminton.png"} width={960} height={540} alt="badminton" priority />
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">VENUE</h3>
              <div className="flex items-center gap-4">
                <h3 className="scroll-m-20 text-lg tracking-tight">KOMPLEKS 3K MPSJ Serdang Raya
                </h3>
                <Link href={"https://maps.app.goo.gl/t848gF43BBWM1tgXA"} target="_blank"><Image src="/sports/google-maps.png" height={24} width={24} alt="Google Maps" /></Link>
              </div>
              <p>Hosted by Ryan</p>
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">DATE & TIME</h3>
              <h3 className="scroll-m-20 tracking-tight">Every Sunday 4:00PM - 6:00PM
              </h3>
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">CONTACT</h3>
              <p>Call or Whatsapp Ryan at 01112836502 if you have any questions. Thank you.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

const PickleballContent = () => {
  return (
    <div className='max-w-[1000px]'>
      <Card>
        <CardHeader>
          <CardTitle className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Pickleball</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <section className="py-4">
            <div>
              <Image src={"/sports/pickleball.jpg"} width={960} height={540} alt="pickleball" priority />
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">VENUE</h3>
              <div className="flex items-center gap-4">
                <h3 className="scroll-m-20 text-lg tracking-tight">P3 Courts | Pickle Bros | Bayan Club (Subject to availability)
                </h3>
                {/* <Link href={"https://maps.app.goo.gl/t848gF43BBWM1tgXA"} target="_blank"><Image src="/sports/google-maps.png" height={24} width={24} alt="Google Maps" /></Link> */}
              </div>
              <p>Hosted by Darren</p>
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">DATE & TIME</h3>
              <h3 className="scroll-m-20 tracking-tight">Every Sunday 2:00PM - 4:00PM OR 3:00PM - 5:00PM
              </h3>
            </div>
            <div className="flex flex-col py-4">
              <h3 className="scroll-m-20 text-xl tracking-tight font-bold">CONTACT</h3>
              <p>Call or Whatsapp Darren at 0178889291 if you have any questions. Thank you.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

const OthersContent = () => {
  const others = [
    {
      title: "Hiking",
      description: "Explore nature's wonders on foot, into God's good creation, breathe in the fresh air, and challenge yourself to reach new heights.",
      imgUrl: "https://images.unsplash.com/photo-1463694775559-eea25626346b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Bowling",
      description: "Experience the thrill of knocking down pins at the bowling alley.",
      imgUrl: "https://images.unsplash.com/photo-1614713568397-b31b779d0498?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Camping",
      description: "Experience the great outdoors and connect with nature through camping trips.",
      imgUrl: "https://images.unsplash.com/photo-1494112142672-801c71472ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBpbmd8ZW58MHwwfDB8fHwy"
    },
    {
      title: "Bouldering",
      description: "Bouldering is a fun and challenging way to test your strength and agility.",
      imgUrl: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <div className='max-w-[1000px]'>
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Others</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <section className="">
            <div className="max-w-5xl mx-auto">
              <HoverEffect items={others} />
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

export default Sports;
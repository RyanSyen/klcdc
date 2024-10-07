import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MessageCircleMore, Phone, Mail, Church, Instagram } from "lucide-react";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export const metadata = {
  title: "Kuala Lumpur Christian Disciples Church",
  description:
    "Discover Kuala Lumpur Christian Disciples Church (KLCDC), a welcoming community located in Kuchai Lama. Join us for our services and connect with fellow believers. Easily accessible from Sri Petaling and surrounding areas, we invite you to visit us for spiritual growth and fellowship. Find directions and contact details on our website.",
  keywords: [
    "kuala lumpur",
    "church",
    "kuchai lama",
    "community",
    "friendly church",
    "loving community",
    "Christian church in Kuala Lumpur",
    "church near Sri Petaling",
    "Kuchai Lama church",
    "KLCDC"
  ],
};

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="relative flex justify-center items-center h-[300px]">
          <Image src={"/contact/contact_us.jpg"} fill className="object-cover" alt="contact us" />
        </div>
        <div className="pt-8">
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Contact Us</h2>
        </div>
        <div className="pb-4">
           Kuala Lumpur Christian Disciples Church (KLCDC) is located in the heart of Kuchai Lama, Kuala Lumpur. We are easy to find and accesible from major roads and public transport. Whether you are visiting from nearby areas like Sri Petaling, Old Klang Road, we invite you to join us for our service. For directions, parking details or any other inquiries, feel free to reach out to us via the contact details below. We look forward to seeing you Christian Disciples Church Kuala Lumpur! 
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <Card className="w-[300px] h-[270px]">
            <CardHeader>
              <MessageCircleMore width={64} height={64} />
              <CardTitle className="pt-4">Pastor Peter Wong</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Phone /> &nbsp; 012-3564644, 03-74994478
            </CardContent>
            <CardFooter>
              <Mail /> &nbsp; petroswcm@gmail.com
            </CardFooter>
          </Card>
          <Card className="w-[300px] h-[270px]">
            <CardHeader>
              <Church width={64} height={64} />
              <CardTitle className="pt-4 flex gap-4">
                Address               
                <Link href={"https://maps.app.goo.gl/3o8DJWt6tGq2xdEE9"} target="_blank"><Image src="/sports/google-maps.png" height={24} width={24} alt="Google Maps" /></Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>30-2, Jalan Kuchai Maju 11,
                Kuchai Entrepreneurs Park,
                58200 Kuala Lumpur</p>
            </CardContent>
          </Card>
          <Card className="w-[300px] h-[270px]">
            <CardHeader>
              <Instagram size={48} strokeWidth={2.25} />
              <CardTitle className="pt-4">Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <LinkPreview
                url="https://www.instagram.com/rootedto_rise/"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                Rooted To Rise
              </LinkPreview>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
};

export default Contact;

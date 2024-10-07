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
        <div className="grid grid-cols-[repeat(auto-fit, minmax(16rem, 24rem))] gap-1">
          <Card>
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
          <Card>
            <CardHeader>
              <Church width={64} height={64} />
              <CardTitle className="pt-4">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p>30-2, Jalan Kuchai Maju 11,
                Kuchai Entrepreneurs Park,
                58200 Kuala Lumpur</p>
            </CardContent>
            <CardFooter>
              <Link href={"https://maps.app.goo.gl/3o8DJWt6tGq2xdEE9"} target="_blank"><Image src="/sports/google-maps.png" height={24} width={24} alt="Google Maps" /></Link>
            </CardFooter>
          </Card>
          <Card>
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

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KUALA LUMPUR CHRISTIAN DISCIPLES CHURCH",
  description:
    "We are a church where God (who is called Yahweh in Scripture) is worshipped; where God’s eternal word (the Holy Scriptures) is the sole standard for doctrine; and where participation in the body of our Lord Jesus Christ, the Son of God, is encouraged.",
  authors: [{ name: "Ryan Wong" }],
  verification: {
    google: "k5c1dOA22A7ZKscgk0rLGr0IsVB-V64OrGBqDiI8ag0",
  },
  // other: {
  //   "google-site-verification": "k5c1dOA22A7ZKscgk0rLGr0IsVB-V64OrGBqDiI8ag0", // this way works too
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights /> 
      </body>
    </html>
  );
}

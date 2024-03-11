import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KUALA LUMPUR CHRISTIAN DISCIPLES CHURCH",
  description:
    "We are a church where God (who is called Yahweh in Scripture) is worshipped; where God’s eternal word (the Holy Scriptures) is the sole standard for doctrine; and where participation in the body of our Lord Jesus Christ, the Son of God, is encouraged.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

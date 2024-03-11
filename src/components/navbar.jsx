"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "../../public/logo.png";
import Link from "next/link";

const navList = [
  {
    name: "Meeting Times",
    path: "/",
  },
  {
    name: "Bible Studies",
    path: "/",
  },
  {
    name: "Youth Corner",
    path: "/",
  },
  {
    name: "Sermons",
    path: "/",
  },
  {
    name: "Testimonies",
    path: "/",
  },
  {
    name: "Events",
    path: "/",
  },
  {
    name: "Sports",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100
        ? setIsTransparent(false)
        : setIsTransparent(pathName.trim() === "/");
    };

    if (pathName.trim() === "/") {
      setIsTransparent(true);
      window.addEventListener("scroll", handleScroll);

      // removes the event listener when component unmounts to prev memory leak
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsTransparent(false);
    }
  }, [pathName]);

  return (
    <nav
      className={`flex flex-wrap justify-between items-center fixed px-7 py-5 w-full shadow-lg z-[100] ${
        isTransparent ? "transparent-nav" : ""
      }`}
    >
      <button>
        <Image
          src={logo}
          alt="KLCDC Icon"
          className="w-9 h-9 sm:w-11 sm:h-11"
        />
      </button>
      <ul className="flex justify-center items-center gap-4">
        {navList.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

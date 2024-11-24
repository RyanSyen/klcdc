"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

import { LinkPreview } from "@/components/ui/link-preview";

// source: https://ui.aceternity.com/components/navbar-menu

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-slate-900 text-sm hover:underline"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border bg-white inline-flex justify-center space-x-4 px-6 py-4 mt-2 items-center gap-4"
    >
      {children}
    </nav>
  );
};

// shimmer source: https://nextjs.org/docs/app/api-reference/components/image#placeholder:~:text=Demo%20the%20shimmer,prop

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={100}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover h-[100px]"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        priority
      />
      {description ? (
        <div>
          <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
            {title}
          </h4>
          <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {description}
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
            {title}
          </h4>
        </div>
      )}
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className={cn("text-slate-900 text-sm hover:underline ", rest.className)}
    >
      {children}
    </Link>
  );
};

const MobileNavbar = () => {
  return (
    <div className="md:hidden flex justify-between items-center p-2 bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed inset-x-0 backdrop-blur z-[40]">
      <HoveredLink href="/">
        <Image src={"/icon/logo.png"} width={48} height={48} alt="klcdc logo" />{" "}
      </HoveredLink>
      <Sheet>
        <SheetTrigger asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000"
            className="bi bi-list cursor-pointer"
            viewBox="0 0 16 16"
            role="button"
            aria-label="hamburger menu"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader className="flex flex-col items-center py-4 text-left">
            <SheetTitle className="text-xl font-bold">
              Christian Disciples Church Kuala Lumpur
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            <SheetClose asChild>
              <HoveredLink href="/" className="border-b border-black py-4">
                Home
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink href="/about" className="border-b border-black py-4">
                About Us
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/join-us"
                className="border-b border-black py-4"
              >
                Join Us
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/sermons"
                className="border-b border-black py-4"
              >
                Sermons
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/testimonies"
                className="border-b border-black py-4"
              >
                Testimonies
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/sports"
                className="border-b border-black py-4"
              >
                Sports
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/events"
                className="border-b border-black py-4"
              >
                Events
              </HoveredLink>
            </SheetClose>
            <SheetClose asChild>
              <HoveredLink
                href="/contact"
                className="border-b border-black py-4"
              >
                Contact Us
              </HoveredLink>
            </SheetClose>
          </div>
          {/* <SheetFooter className="flex !flex-col gap-4 py-4 !space-x-0">
          <p>Follow Us</p>
          <LinkPreview
            url="https://www.instagram.com/rootedto_rise/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </LinkPreview>
        </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  //! Dont hide navbar on scroll
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   let previousScrollPosition = 0;
  //   let currentScrollPosition = 0;

  //   window.addEventListener("scroll", function (e) {
  //     // Get the new Value
  //     currentScrollPosition = window.pageYOffset;

  //     //Subtract the two and conclude
  //     if (previousScrollPosition - currentScrollPosition < 0) {
  //       setShow(true);
  //     } else if (previousScrollPosition - currentScrollPosition > 0) {
  //       setShow(false);
  //     }

  //     // Update the previous value
  //     previousScrollPosition = currentScrollPosition;
  //   });
  // }, []);

  return (
    <>
      <nav className={`hidden md:block navbar active`}>
        <div className="fixed inset-x-0 z-50 w-full inline-flex justify-around items-center">
          <Menu setActive={setActive}>
            <HoveredLink href="/" onMouseEnter={() => setActive(null)}>
              Home
            </HoveredLink>
            <HoveredLink href="/about" onMouseEnter={() => setActive(null)}>
              About Us
            </HoveredLink>
            <HoveredLink href="/join-us" onMouseEnter={() => setActive(null)}>
              Join Us
            </HoveredLink>
            <HoveredLink href="/sermons" onMouseEnter={() => setActive(null)}>
              Sermons
            </HoveredLink>
            <HoveredLink
              href="/testimonies"
              onMouseEnter={() => setActive(null)}
            >
              Testimonies
            </HoveredLink>
            <HoveredLink href="/sports" onMouseEnter={() => setActive(null)}>
              Sports
            </HoveredLink>
            <HoveredLink href="/events" onMouseEnter={() => setActive(null)}>
              Events
            </HoveredLink>
            <HoveredLink href="/contact" onMouseEnter={() => setActive(null)}>
              Contact Us
            </HoveredLink>
          </Menu>
        </div>
      </nav>
      <MobileNavbar className="md:hidden" />
    </>
  );
};

export default Navbar;

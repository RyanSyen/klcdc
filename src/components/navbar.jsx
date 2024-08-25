"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <Link {...rest} className="text-slate-900 text-sm hover:underline ">
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed inset-x-0 z-50 w-full inline-flex justify-around items-center">
      <Menu setActive={setActive}>
        <HoveredLink href="/about" onMouseEnter={() => setActive(null)}>
          About Us
        </HoveredLink>
        <HoveredLink href="/sermons" onMouseEnter={() => setActive(null)}>
          Sermons
        </HoveredLink>
        <HoveredLink href="/testimonies" onMouseEnter={() => setActive(null)}>
          Testimonies
        </HoveredLink>
        <HoveredLink href="/sports" onMouseEnter={() => setActive(null)}>
          Sports
        </HoveredLink>
        <HoveredLink href="/events" onMouseEnter={() => setActive(null)}>
          Events
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Join Us">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Sunday Service"
              href="/sunday-service"
              src="/navbar/service.jpg"
              description="Let's gather in His name this Sunday."
            />
            <ProductItem
              title="Youth Corner"
              href="/youth-corner"
              src="/navbar/youth-corner.png"
              description="Growing the next generations."
            />
            <ProductItem
              title="Bible Studies"
              href="/bible-study"
              src="/navbar/bible-study.jpg"
              description="Learning and deepening our faith through scripture."
            />
          </div>
        </MenuItem>
        <HoveredLink href="/contact" onMouseEnter={() => setActive(null)}>
          Contact Us
        </HoveredLink>
      </Menu>
    </div>
  );
};

export default Navbar;

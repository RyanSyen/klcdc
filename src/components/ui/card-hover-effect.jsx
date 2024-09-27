"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// export const HoverEffect = ({
//   items,
//   className
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     (<div
//       className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
//       {items.map((item, idx) => (
//         item?.link ? (
//           <Link
//             href={item?.link}
//             key={item?.link}
//             className="relative group  block p-2 h-full w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}>
//             <AnimatePresence>
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }} />
//               )}
//             </AnimatePresence>
//             {
//               item.imgUrl ? (
//                 <Card style={{ backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover' }}>
//                   <CardTitle>{item.title}</CardTitle>
//                   <CardDescription>{item.description}</CardDescription>
//                 </Card>
//               ) : (
//                 <Card >
//                   <CardTitle>{item.title}</CardTitle>
//                   <CardDescription>{item.description}</CardDescription>
//                 </Card>
//               )
//             }
//           </Link>
//         ) : (
//           <div
//             key={idx}
//             className="relative group  block p-2 h-full w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}>
//             <AnimatePresence>
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }} />
//               )}
//             </AnimatePresence>
//             {
//               item.imgUrl ? (
//                 <Card style={{ backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover' }}>
//                   <CardTitle>{item.title}</CardTitle>
//                   <CardDescription>{item.description}</CardDescription>
//                 </Card>
//               ) : (
//                 <Card >
//                   <CardTitle>{item.title}</CardTitle>
//                   <CardDescription>{item.description}</CardDescription>
//                 </Card>
//               )
//             }
//           </div>
//         )
//       ))}
//     </div>)
//   );
// };

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const renderCard = (item) => (
    <Card style={item.imgUrl ? { backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover' } : {}}>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </Card>
  );

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => {
        const isLink = item?.link;
        const commonProps = {
          // key: isLink ? item.link : idx,
          className: "relative group block p-2 h-full w-full",
          onMouseEnter: () => setHoveredIndex(idx),
          onMouseLeave: () => setHoveredIndex(null),
        };

        return isLink ? (
          <Link href={item.link} key={item?.link || idx} {...commonProps}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            {renderCard(item)}
          </Link>
        ) : (
          <div key={item?.link || idx} {...commonProps}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            {renderCard(item)}
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
  style
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={style}>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover:bg-black opacity-60"></div>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-[#fcfcfc] tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};

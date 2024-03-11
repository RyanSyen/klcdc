"use client";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathName = usePathname().trim();

  return <div className="pt-24 px-4">{children}</div>;
}

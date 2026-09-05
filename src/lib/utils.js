import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Shared horizontal bounds for homepage sections, so headings and the content
// beneath them start and end on the same line.
export const sectionContainer = "mx-auto max-w-7xl px-4 md:px-8";

// Shared gap between cards within a section.
export const sectionGap = "gap-6 md:gap-8";

// Shared space between a section heading and the content under it.
export const sectionHeadingGap = "pt-10";

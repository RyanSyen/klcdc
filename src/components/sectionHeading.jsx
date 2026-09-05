import { cn, sectionContainer } from "@/lib/utils";

const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        sectionContainer,
        "font-sans text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;

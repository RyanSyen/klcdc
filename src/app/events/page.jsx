import { promises as fs } from "fs";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

// can refer to https://ui.aceternity.com/components/timeline

const TimelineContent = ({ title, subtitle, paragraphs, images }) => (
  <div>
    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-bold mb-4">{subtitle}</h3>
    {paragraphs.map((text, index) => (
      <p key={index} className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        {text}
      </p>
    ))}
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      ))}
    </div>
  </div>
);

const Events = async () => {
  const file = await fs.readFile('public/data/events.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className="w-full">
      <Timeline data={data.map(item => ({
        title: item.title,
        content: <TimelineContent title={item.title} subtitle={item.subtitle} paragraphs={item.paragraphs} images={item.images} />
      }))} />
    </div>
  )
};

export default Events;

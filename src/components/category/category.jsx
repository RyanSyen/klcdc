import { HoverEffect } from "../ui/card-hover-effect";

const projects = [
  {
    title: "Meeting Times",
    link: "/sunday-service",
    icon: "/icon/church.png",
  },
  {
    title: "Statement Of Faith",
    link: "/",
    icon: "/icon/bible.png",
  },
  {
    title: "Events",
    link: "/events",
    icon: "/icon/event.png",
  },
];

const Category = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default Category;

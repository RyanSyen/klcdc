import { useEffect, useState } from "react";

const useBannerCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const images = [
    {
      id: 0,
      name: "Christmas Gathering",
      url: "/carousel/christmas.jpg",
    },
    {
      id: 1,
      name: "Putrajaya Retreat",
      url: "/carousel/putrajaya-retreat.jpg",
    },
    {
      id: 2,
      name: "Picnic",
      url: "/carousel/picnic.jpg",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slideTo = (slideId) => {
    api?.scrollTo(slideId);
  };

  return {
    setApi,
    images,
    slideTo,
    current,
  };
};

export default useBannerCarousel;

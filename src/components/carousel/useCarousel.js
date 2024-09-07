import { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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
    slideTo,
    current,
  };
};

export default useCarousel;

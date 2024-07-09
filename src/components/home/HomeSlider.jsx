import { useEffect, useState } from 'react';
import SliderItem from './SliderItem';

const HomeSlider = () => {
  const [isShow, setIsShow] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShow((prevSlide) => (prevSlide % 3) + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-[1150px] mx-auto px-5 relative mb-[16px] ">
      <div className=" overflow-hidden h-[440px] w-full z-0 relative  rounded-[10px]  ">
        <div
          style={{ transform: `translateX(-${isShow * 100}% )` }}
          className="flex w-full transition-transform ease-out duration-500 z-0 relative"
        >
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

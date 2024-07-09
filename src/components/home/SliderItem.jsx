import img from "../../assets/home/homeFire.svg";
const SliderItem = () => {
  return (
    <div className={` min-w-full pt-[48px] pl-[76px]  sliderItem h-[455px] `}>
      <div className="w-[55%] ">
        <p className="text-[#1F2533] text-[40px] font-semibold leading-[54px] tracking-[-2.4px] mb-[12px] ">
          SEEDRA Basil Seeds for Indoor and Outdoor Planting
        </p>
        <p className="text-[#1F2533] text-[15px] font-light leading-[28px] mb-[21px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dolores harum iste quae possimus animi earum adipisci cum consectetur
          modi assumenda error totam facilis ipsam, quisquam voluptates? Velit,
          dolore ad!
        </p>

        <div className="flex items-center gap-[18px] mb-[25px]">
          <img src={img} alt="" />
          <span className="text-[#1F2533] text-[42px] font-semibold leading-[54px]">
            $12.56
          </span>
          <span className="text-[#70737C] text-[22px] font-semibold leading-[54px] line-through ">
            $15.56
          </span>
        </div>

        <div className="flex items-center gap-[12px] ">
          <button className=" custom-btnG">Add to card</button>
          <button className="custom-btn">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

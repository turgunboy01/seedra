import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home/clock-three.svg";
import img2 from "../../assets/home/qulupnay.svg";
import img3 from "../../assets/home/karam.png";
import img4 from "../../assets/home/female.png";

const HomeBlog = () => {
  return (
    <div className=" max-w-[1150px] mx-auto px-5">
      <div className="flex justify-between items-center mb-[40px] ">
        <p className=" custom-title">Our products.</p>
        <button className=" custom-btn">Go to our blog</button>
      </div>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-[30px] mb-[86px] py-[20px] ">
        <div className="flex justify-between border bg-[#EAF1EB] rounded-[12px] col-span-2">
          <div className="pt-[24px] pl-[30px] w-[48%] py-[20px]  ">
            <span className="flex gap-2 items-center mb-2 ">
              <img src={img1} alt="" /> <span>12.09.2021</span>
            </span>
            <p className="text-[#1F2533] text-[24px] mb-1 font-semibold leading-[31.5px] tracking-[-0.48px]">
              How to plant spinach correctly in winter
            </p>
            <p className="text-[#70737C] text-[14px] font-normal leading-[178.187%] mb-[14px] ">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className=" custom-btn">Read</button>
          </div>
          <div className="flex items-end">
            <img src={img3} alt="kokatimg" />
          </div>
        </div>

        <div className="flex flex-col justify-between border bg-[#EFF2F8] rounded-[12px] row-span-2">
          <div className="pt-[24px] pl-[24px] pr-[20px] ">
            <span className="flex gap-2 items-center mb-2 ">
              <img src={img1} alt="" /> <span>12.09.2021</span>
            </span>
            <p className="text-[#1F2533] text-[24px] mb-1 font-semibold leading-[31.5px] tracking-[-0.48px]">
              How to plant spinach correctly in winter
            </p>
            <p className="text-[#70737C] text-[14px] font-normal leading-[178.187%] mb-[14px] ">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className=" custom-btn">Read</button>
          </div>
          <div className="flex justify-end">
            <img src={img4} alt="kokatimg" />
          </div>
        </div>

        <div className="flex flex-col justify-between border bg-[#EFF2F8] rounded-[12px] ">
          <div className="pt-[24px] pl-[24px] pr-[20px] ">
            <span className="flex gap-2 items-center mb-2 ">
              <img src={img1} alt="" /> <span>12.09.2021</span>
            </span>
            <p className="text-[#1F2533] text-[24px] mb-[14px] font-semibold leading-[31.5px] tracking-[-0.48px]">
              How to plant spinach correctly in winter
            </p>
            <button className=" custom-btn">Read</button>
          </div>

          <div className="flex justify-end">
            <img src={img2} alt="kokatimg" />
          </div>
        </div>

        <div className="flex flex-col justify-between border bg-[#EFF2F8] rounded-[12px] ">
          <div className="pt-[24px] pl-[24px] pr-[20px] ">
            <span className="flex gap-2 items-center mb-2 ">
              <img src={img1} alt="" /> <span>12.09.2021</span>
            </span>
            <p className="text-[#1F2533] text-[24px] mb-[14px] font-semibold leading-[31.5px] tracking-[-0.48px]">
              How to plant spinach correctly in winter
            </p>
            <button className=" custom-btn">Read</button>
          </div>
          <div className="flex justify-end">
            <img src={img2} alt="kokatimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;

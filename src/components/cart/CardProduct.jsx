import React from "react";
import img1 from "../../assets/data/img1.png";
import { IoClose } from "react-icons/io5";
const CardProduct = () => {
  return (
    <div className="flex gap-[30px] py-[10px] flex-col md:flex-row   relative">
      <div className="w-full md:w-1/2   flex  items-center gap-5">
        <button className="absolute -top-2 w-[22px] h-[22px] bg-[#e55c5c] left-[45%] sm:left-0 text-[#fff] flex justify-center items-center  rounded-full">
          <IoClose size={14} />
        </button>
        <img
          src={img1}
          alt="cartImg"
          className="w-[65px] h-[65px] sm:order-first order-last "
        />
        <h2 className="text-[#1F2533] text-[14px] font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
      </div>
      <div className="md:w-1/2 flex md:items-center flex-col md:flex-row  gap-2 ">
        <div className="w-full md:w-1/3 flex justify-between items-center ">
          <h2 className="block md:hidden  text-[#70737C] text-[14px] font-medium">
            AMOUNT
          </h2>
          <div className="text-[#70737C] text-[14px] border rounded-[11px] p-1 max-w-[100px] w-full font-medium flex justify-between items-center">
            <button className=" w-[32px] h-[32px] flex justify-center items-center text-[#359740] ">
              -
            </button>
            <p className="px-3  w-[32px] h-[32px] flex justify-center items-center border bg-[#35974014] text-[#359740]">
              0
            </p>
            <button className=" w-[32px] h-[32px] flex justify-center items-center py-2 text-[#359740] ">
              +
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/3 flex justify-between items-center  ">
          <p className="block md:hidden  text-[#70737C] text-[14px] font-medium">
            PRICE
          </p>
          <p className="text-[#1F2533] text-[14px] font-semibold">$12.56</p>
        </div>
        <div className="w-full md:w-1/3  flex justify-between items-center ">
          <p className="block md:hidden text-[#70737C] text-[14px] font-medium">
            TOTAL
          </p>
          <p className="text-[#1F2533] text-[14px] font-semibold">$12.56</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

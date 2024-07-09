import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Card } from "../../assets/HomeSvg";
import { FaSquareCheck } from "react-icons/fa6";

const ProductCard = ({ item }) => {
  const [clickCard, setClickCard] = useState(false);
  return (
    <div className="rounded-lg border p-5  h-[400px]  flex flex-col justify-between">
      <div className="">
        <img
          src={item.img}
          className="w-full h-[180px] mb-2 object-contain"
          alt=""
        />
        <span className="">
          <Rating name="read-only" value={item.rating} readOnly />
        </span>
        <h2 className=" text-[16px] sm:text-[14px] lg:text-[16px] text-[#1F2533] font-medium">{item.title}</h2>
      </div>
      <div className="flex justify-between items-center">
        <span>
          <h2 className="text-[28px] sm:text-[18px] lg:text-[24px] leading-[54px] font-semibold">
            ${item.price.toFixed(2)}
          </h2>
        </span>
        <div className="flex">
          {clickCard ? (
            <FaSquareCheck size={40} className="text-[#359740]" />
          ) : (
            <Card />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from '../../../public/home/homeSlider.svg';
import image from "../../assets/home/homeSlider.svg";
import { Rating } from "@mui/material";

function CenterMode() {
  const sliderdata = [
    {
      id: "s1",
      img: image,
      date: "12.09.2021",
    },
    {
      id: "s1",
      img: image,
    },
    {
      id: "s1",
      img: image,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1150px] mx-auto px-5">
      <Slider {...settings} className="mb-[90px] ">
        {sliderdata.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-[12px] shadow-xl p-[35px] mx-[30px] "
          >
            <div className="flex items-center gap-[24px] mb-[28px] ">
              <img src={item.img} alt="" className="w-[64px] h-[64px] " />
              <div>
                <p className="text-[#1F2533] text-[18px] font-medium leading-[25px] tracking-[-0.72px]">
                  Carla Samantoes-Diego
                </p>
                <p className="text-[#70737C] text-[14px] font-normal leading-[178.187%]">
                  12.09.2021
                </p>
              </div>
            </div>
            <Rating name="read-only" value={5} readOnly />
            <p className="text-[#1F2533] text-[16px] font-light leading-[28px]">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George Be sure of
              our quality - the freshest batches of this season. Non-GMO,
              Heirloom - our seeds were tested and have the best germination
              ratings.
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;

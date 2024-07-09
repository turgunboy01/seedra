import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/home/homeLogo.svg";

const Footer = () => {
  return (
    <div className="bg-white shadow-2xl  flex flex-col justify-center items-center  ">
      <div className=" max-w-[1150px] px-5 mx-auto w-full  ">
        <div className="w-full flex justify-center">
          <img src={logo} alt="" className=" lg:mb-[-30px] mb-5" />
        </div>
        <div className="pb-[30px] flex justify-between">
          <ul className="flex md:flex-row flex-col  gap-2 md:gap-[25px]">
            <li>
              <a className="text-[14px] text-[#70737C]" href="#">
                ALL PRODUCTS
              </a>
            </li>
            <div className="hidden md:block w-[1px] h-[25px] bg-[#4FA083]" />
            <li>
              <a className="text-[14px] text-[#70737C]" href="#">
                ABOUT SEEDRA
              </a>
            </li>
            <div className="hidden md:block w-[1px] h-[25px] bg-[#4FA083]" />

            <li>
              <a className="text-[14px] text-[#70737C]" href="#">
                OUR BLOG
              </a>
            </li>
          </ul>
          <ul className="flex md:flex-row flex-col  gap-2 md:gap-[25px]">
            <li>
              <a className="text-[14px] text-[#70737C]" href="#">
                Terms&Conditions
              </a>
            </li>
            <div className="hidden md:block w-[1px] h-[25px] bg-[#4FA083]" />

            <li>
              <a className="text-[14px] text-[#70737C]" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center py-[30px]  border-t">
          <div className=" flex items-center gap-2 ">
            <AiFillInstagram className="w-[24px] h-[24px] text-[--green]  " />
            <FaFacebook className="w-[20px] h-[20px] text-[--green]  " />
          </div>
          <p className="text-[#70737C] text-[14px] font-normal leading-[178.187%]">
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

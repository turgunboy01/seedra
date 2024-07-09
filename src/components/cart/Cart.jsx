import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardProduct from "./CardProduct";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Shipping");

  const options = ["Shipping", "Pickup", "Express"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="max-w-[1150px] mx-auto px-5 flex sm:flex-row flex-col gap-[30px]  py-[60px]">
      <div className="w-full md:w-2/3">
        <div className="flex justify-between border-b pb-[20px] items-center">
          <h2 className="text-[#1F2533] text-[26px] md:text-[36px] font-semibold -tracking-[5%]">
            Your cart.
          </h2>
          <p className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-[#70737C]">
            3 items
          </p>
        </div>
        <div className="">
          <div className=" hidden md:flex gap-[30px] py-[30px] ">
            <div className="w-1/2  h-3">
              <h2 className="text-[#70737C] text-[14px] font-medium">
                PRODUCT DETAILS
              </h2>
            </div>
            <div className="w-1/2 flex gap-2 ">
              <div className="w-1/3 h-3 ">
                <p className="text-[#70737C] text-[14px] font-medium">AMOUNT</p>
              </div>
              <div className="w-1/3 h-3 ">
                <p className="text-[#70737C] text-[14px] font-medium">PRICE</p>
              </div>
              <div className="w-1/3 h-3 ">
                <p className="text-[#70737C] text-[14px] font-medium">TOTAL</p>
              </div>
            </div>
          </div>
          <div className="pt-[40px]">
            <CardProduct />
          </div>
        </div>
      </div>
      <div className=" w-full sm:w-[60%] md:w-1/3 border overflow-hidden  rounded-[12px] p-[30px]">
        <h2 className="text-[18px] text-[#1F2533] font-bold">Order summary</h2>
        <span className="flex justify-between items-center py-3">
          <h2 className="text-[14px] text-[#70737C]">3 ITEMS</h2>
          <p className="text-[18px] text-[#1F2533] font-semibold">$12.56</p>
        </span>
        <div className="py-3">
          <div
            className="border border-gray-300 rounded-full px-5 py-2 cursor-pointer flex justify-between items-center"
            onClick={toggleDropdown}
          >
            <div className="flex flex-col">
              <h2 className="text-[#70737C] text-[14px]">Type of delivery</h2>
              <p className="text-[#1F2533] font-semibold">{selectedOption}</p>
            </div>
            <div className="flex items-center">
              <IoIosArrowDown className="ml-2" />
            </div>
          </div>
          {isOpen && (
            <div className="absolute mt-1 w-[150px]  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="py-[10px] pb-[20px]">
          {" "}
          <label htmlFor="cod" className="text-[#70737C] text-[14px]">
            Promocode
          </label>
          <input
            type="text"
            placeholder="Promocode"
            className="p-3 border rounded-md outline-none w-full"
          />
        </div>
        <span className="flex justify-between items-center py-[20px] border-t">
          <h3 className="text-[#70737C] text-[14px]">Total amount</h3>
          <p className="text-[18px] text-[#1F2533] font-semibold">$12.56</p>
        </span>
        <button className="py-2 w-full bg-[#359740] hover:bg-[#2bb159] text-[#fff] font-semibold rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Cart;

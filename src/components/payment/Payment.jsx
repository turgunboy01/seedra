import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import img1 from "../../assets/Path.png";
import img2 from "../../assets/visa.png";
import img3 from "../../assets/mas.png";
import img4 from "../../assets/paypal.png";
import { useForm } from "react-hook-form";
import { HiArrowSmallRight } from "react-icons/hi2";

const cards = [img1, img2, img3, img4];

const Payment = () => {
  const [checkCard, setCheckCard] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1150px] mx-auto px-5 py-[60px] flex justify-center items-center">
      <div className="w-[450px] h-auto  p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-4">
            <GoArrowLeft size={30} />
            <h2 className="text-[36px] font-semibold leading-[54px] text-[#1F2533]">
              Payment info
            </h2>
          </span>
          <div className="flex gap-1">
            <div className="w-[22px] h-[6px] bg-[#3597405e] rounded-[30px]" />
            <div className="w-[22px] h-[6px] bg-[#359740] rounded-[30px]"></div>
          </div>
        </div>
        <p className="text-[#70737C] text-[14px] pt-[15px] pb-[8px]">
          Card type
        </p>

        <div className="flex gap-[20px] mb-5">
          {cards.map((item, index) => (
            <button
              key={index}
              onClick={() => setCheckCard(index)}
              className={`flex justify-center items-center object-contain w-[68px] h-[45px] border rounded-lg ${
                index === checkCard ? "border-[#359740]" : "border-[#E5E5E5]"
              }`}
            >
              <img src={item} alt="card type" />
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col  gap-[20px]  mb-5">
            <div className="flex flex-col">
              <label htmlFor="card" className="text-[14px] pb-1 text-[#70737C]">
                Card Number
              </label>
              <input
                type="text"
                id="card"
                placeholder="0000 0000 0000 0000"
                className={`border-[#E5E5E5] w-full h-[50px] outline-none px-[12px] border rounded-[4px]                 `}
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-[12px]">
                  {errors.cardNumber.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-[14px] pb-1 text-[#70737C]"
                >
                  Expiring date
                </label>
                <input
                  type="text"
                  id="date"
                  placeholder="01/01"
                  className={`border-[#E5E5E5] w-[100%] h-[50px] outline-none px-[12px] border rounded-[4px]                 `}
                  {...register("expiryDate", {
                    required: "Expiry date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Invalid date format",
                    },
                  })}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-[12px]">
                    {errors.expiryDate.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="ccv"
                  className="text-[14px] pb-1 text-[#70737C]"
                >
                  CCV
                </label>
                <input
                  type="text"
                  id="ccv"
                  placeholder="123"
                  className={`border-[#E5E5E5] w-full h-[50px] outline-none px-[12px] border rounded-[4px]                 `}
                  {...register("cvv", {
                    required: "CVV is required",
                    pattern: { value: /^\d{3}$/, message: "Invalid CVV" },
                  })}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-[12px]">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-[20px] border-t">
            <h2 className="text-[#70737C] text-[16px]">Total amount</h2>
            <p className="text-[18px] font-semibold">$12.56</p>
          </div>
          <button
            type="submit"
            className="w-full flex justify-between px-4 items-center py-2 bg-[#359740] text-white rounded-lg"
          >
            <p className="font-semibold">$12.56</p>
            <div className="flex items-center font-semibold gap-2">
              Continue <HiArrowSmallRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

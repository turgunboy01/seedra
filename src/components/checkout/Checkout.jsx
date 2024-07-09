import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div>
      <div className="max-w-[1150px] mx-auto px-5 py-[30px] flex gap-[30px]">
        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-4">
              <GoArrowLeft size={30} />
              <h2 className="text-[36px] font-semibold leading-[54px] text-[#1F2533]">
                Checkout
              </h2>
            </span>
            <div className="flex gap-1">
              <div className="w-[22px] h-[6px] bg-[#3597405e] rounded-[30px]" />
              <div className="w-[22px] h-[6px] bg-[#359740] rounded-[30px]"></div>
            </div>
          </div>
          <h2 className="text-[#1F2533] font-semibold text-[24px] py-[13px]">
            Personal info
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 gap-[30px]">
              <div className="">
                <label
                  className="text-[14px] text-[#70737C] font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className={`p-3 outline-none w-full border mt-1 rounded ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="">
                <label
                  className="text-[14px] pb-1 text-[#70737C] font-semibold"
                  htmlFor="number"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Your phone number"
                  className={`p-3 outline-none w-full mt-1 border rounded ${
                    errors.number ? "border-red-500" : ""
                  }`}
                  {...register("number", { required: "Phone number is required" })}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">{errors.number.message}</p>
                )}
              </div>
            </div>
            <h2 className="text-[#1F2533] font-semibold text-[24px] py-[13px] pt-[20px]">
              Address
            </h2>
            <div className="grid sm:grid-cols-2 gap-[30px]">
              <div className="">
                <label
                  className="text-[14px] text-[#70737C] font-semibold"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Name of state"
                  className={`p-3 outline-none w-full border mt-1 rounded ${
                    errors.state ? "border-red-500" : ""
                  }`}
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>
              <div className="">
                <label
                  className="text-[14px] pb-1 text-[#70737C] font-semibold"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Name of city"
                  className={`p-3 outline-none w-full mt-1 border rounded ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 pt-3 gap-[30px]">
              <div className="">
                <label
                  className="text-[14px] text-[#70737C] font-semibold"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                  className={`p-3 outline-none w-full border mt-1 rounded ${
                    errors.address ? "border-red-500" : ""
                  }`}
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address.message}</p>
                )}
              </div>
              <div className="">
                <label
                  className="text-[14px] pb-1 text-[#70737C] font-semibold"
                  htmlFor="zip"
                >
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="ZIP code"
                  className={`p-3 outline-none w-full mt-1 border rounded ${
                    errors.zip ? "border-red-500" : ""
                  }`}
                  {...register("zip", { required: "ZIP code is required" })}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip.message}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="py-[11px] px-[30px] bg-[#359740] hover:bg-[#2bb159] text-[#fff] rounded-md mt-8"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="w-1/3 hidden md:block  border rounded-[12px] h-full p-[30px]">
          <h3 className="text-[18px] text-[#1F2533] font-bold">Your cart</h3>
          <div className="py-3 border-b">
            <h2 className=" text-[12px] md:text-[14px] text-[#70737C]">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </h2>
            <p className="text-[18px] text-[#1F2533] font-semibold pt-2">
              $12.56
            </p>
          </div>
          <div className="flex justify-between items-center py-4">
            <h2 className="text-[14px] text-[#70737C]">Total amount</h2>
            <p className="text-[#1F2533] text-[18px] font-semibold">$12.56</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

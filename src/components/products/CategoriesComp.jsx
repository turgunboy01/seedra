import React from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
} from "../../assets/filter/FilterSvg";
const CategoriesComp = ({ selectedCategory,handleCategoryChange }) => {
  return (
    <div className="pt-2 pb-4">
      <h2 className="text-[16px] py-2 font-semibold text-[#1F2533]">
        Categories
      </h2>
      <div className="flex justify-between overflow-x-scroll gap-[15px] ">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold text-[14px]  ${
            selectedCategory === "all" ? "text-[#359740]" : "text-[#70737c]"
          }`}
        >
          <Icon1 /> ALL
        </button>
        <button
          onClick={() => handleCategoryChange("BUNDLES")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px] ${
            selectedCategory === "BUNDLES"
              ? "text-[#359740]"
              : "text-[#70737c] "
          }`}
        >
          <Icon2 /> BUNDLES
        </button>
        <button
          onClick={() => handleCategoryChange("HERBS")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px] ${
            selectedCategory === "HERBS" ? "text-[#359740]" : "text-[#70737c] "
          }`}
        >
          <Icon3 /> HERBS
        </button>
        <button
          onClick={() => handleCategoryChange("VEGETABLES")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px] ${
            selectedCategory === "VEGETABLES"
              ? "text-[#359740]"
              : "text-[#70737c] "
          }`}
        >
          <Icon4 /> VEGETABLES
        </button>
        <button
          onClick={() => handleCategoryChange("FRUITS")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px]  ${
            selectedCategory === "FRUITS" ? "text-[#359740]" : "text-[#70737c] "
          }`}
        >
          <Icon5 /> FRUITS
        </button>
        <button
          onClick={() => handleCategoryChange("SUPPLIES")}
          className={`flex gap-2 items-center px-6 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px] ${
            selectedCategory === "SUPPLIES"
              ? "text-[#359740]"
              : "text-[#70737c] "
          }`}
        >
          <Icon6 /> SUPPLIES
        </button>
        <button
          onClick={() => handleCategoryChange("FLOWERS")}
          className={`flex gap-2 items-center px-4 py-2 rounded-lg border cursor-pointer font-semibold  text-[14px]  ${
            selectedCategory === "FLOWERS" ? "text-[#359740]" : "text-[#70737c]"
          }`}
        >
          <Icon7 /> FLOWERS
        </button>
      </div>
    </div>
  );
};

export default CategoriesComp;

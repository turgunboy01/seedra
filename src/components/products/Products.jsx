import React, { useState } from "react";
import { ProductsData } from "../../data/ProductsData";
import ProductCard from "./ProductCard";
import { IoCheckbox } from "react-icons/io5";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { FiFilter, FiSearch } from "react-icons/fi";
import SortDropdown from "./SortDropdown";
import CategoriesComp from "./CategoriesComp";

const Products = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Most expensive");
  const [clickedFilter, setClickedFilter] = useState(false);

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredProducts = ProductsData.filter(
    (item) =>
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      (selectedCategory === "all" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortOption === "Most expensive") {
      return b.price - a.price;
    } else if (sortOption === "Least expensive") {
      return a.price - b.price;
    } else if (sortOption === "Most popular") {
      return b.popularity - a.popularity; // Assuming there's a popularity field
    } else if (sortOption === "Newest") {
      return new Date(b.date) - new Date(a.date); // Assuming there's a date field
    }
    return 0;
  });

  return (
    <div className="max-w-[1150px] py-[50px] mx-auto px-5 relative overflow-hidden">
      <div className="flex justify-between gap-[30px]">
        <div className=" w-full sm:w-[79%] border rounded-full flex items-center py-2 px-4 gap-2">
          <FiSearch className="text-[#70737C]" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="outline-none w-full text-[15px]"
          />
          <button
            onClick={() => setClickedFilter(!clickedFilter)}
            className=" sm:hidden  block"
          >
            <FiFilter size={18} className="text-[#359740]" />
          </button>
        </div>
        <div className=" hidden sm:block max-w-[300px] w-full  rounded-full">
          <SortDropdown
            selectedSortOption={sortOption}
            onSortChange={handleSortChange}
          />
        </div>
      </div>

      <div
        className={`w-[90%] mx-auto  border p-5 left-7 top-[95px] duration-300 absolute  bg-[#fff] z-50 ${
          clickedFilter ? "translate-x-0" : "translate-x-[150%]"
        } `}
      >
        <h2 className="text-[14px] border-b py-2 font-medium text-[#1F2533]">
          FILTERS
        </h2>
        <h2 className="text-[14px] md:text-[16px]  flex justify-between items-center border-b py-2 font-semibold text-[#1F2533]">
          Seed type <MdOutlineKeyboardArrowDown className="rotate-180" />
        </h2>
        <div className="py-2">
          {[
            "Hybrid",
            "Open Pollinated",
            "Organic Seeds, Plants, and Supplies",
            "Pelleted Seed",
          ].map((label, index) => (
            <label
              key={index}
              onClick={() => handleCheckboxChange(index)}
              className="flex gap-2 items-center cursor-pointer text-[14px] text-[#70737c] w-[100%]"
            >
              <span>
                {checkedIndex === index ? (
                  <IoCheckbox className="text-[#359740] bg-[#eff7f0] rounded" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="text-[#efefef]" />
                )}
              </span>
              <div className="w-[50%]">{label}</div>
            </label>
          ))}
        </div>

        <div className="border-b  flex justify-between items-center">
          <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
            Featured
          </h2>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex justify-between items-center border-b ">
          <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
            Growing Conditions
          </h2>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div>
          <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
            Price
          </h2>

          <div className="flex w-[100%] items-center gap-[10px] justify-between">
            <div className="">
              <div className="">
                <p className="text-[14px] text-[#70737C] font-normal py-1">
                  From
                </p>
                <div className="  w-[90px] text-[14px] md:text-[16px] px-4 py-2 border">
                  ${priceRange[0]}
                </div>
              </div>
            </div>
            <div className="w-[24px] mt-[25px] h-[1.5px] bg-[#70737C]" />
            <div className="">
              <div className="">
                <p className="text-[14px] text-[#70737C] font-normal py-1">
                  To
                </p>
                <div className="w-[90px] text-[14px] md:text-[16px] px-4 py-2 border">
                  ${priceRange[1]}
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 w-full">
            <Box sx={{ width: 250 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                aria-labelledby="price-range-slider"
              />
            </Box>
          </div>
        </div>
        <div className="flex justify-between border-t items-center">
          <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
            Use
          </h2>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex justify-between border-t items-center">
          <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
            Additional Characteristic
          </h2>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      <CategoriesComp
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="flex gap-[40px]">
        <div className="w-[25%] sm:block hidden ">
          <h2 className="text-[14px] border-b py-2 font-medium text-[#1F2533]">
            FILTERS
          </h2>
          <h2 className="text-[14px] md:text-[16px]  flex justify-between items-center border-b py-2 font-semibold text-[#1F2533]">
            Seed type <MdOutlineKeyboardArrowDown className="rotate-180" />
          </h2>
          <div className="py-2">
            {[
              "Hybrid",
              "Open Pollinated",
              "Organic Seeds, Plants, and Supplies",
              "Pelleted Seed",
            ].map((label, index) => (
              <label
                key={index}
                onClick={() => handleCheckboxChange(index)}
                className="flex gap-2 items-center cursor-pointer text-[14px] text-[#70737c] w-[100%]"
              >
                <span>
                  {checkedIndex === index ? (
                    <IoCheckbox className="text-[#359740] bg-[#eff7f0] rounded" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="text-[#efefef]" />
                  )}
                </span>
                <div className="w-[50%]">{label}</div>
              </label>
            ))}
          </div>

          <div className="border-b  flex justify-between items-center">
            <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
              Featured
            </h2>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex justify-between items-center border-b ">
            <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
              Growing Conditions
            </h2>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div>
            <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
              Price
            </h2>

            <div className="flex w-[100%] items-center gap-[10px] justify-between">
              <div className="">
                <div className="">
                  <p className="text-[14px] text-[#70737C] font-normal py-1">
                    From
                  </p>
                  <div className="  w-[50px] md:w-[70px] text-[14px] md:text-[16px] px-1 md:px-4 py-2 border">
                    ${priceRange[0]}
                  </div>
                </div>
              </div>
              <div className="w-[24px] mt-[25px] h-[1.5px] bg-[#70737C]" />
              <div className="">
                <div className="">
                  <p className="text-[14px] text-[#70737C] font-normal py-1">
                    To
                  </p>
                  <div className=" w-[50px] md:w-[70px] text-[14px] md:text-[16px] px-1 md:px-4 py-2 border">
                    ${priceRange[1]}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 w-full">
              <Box sx={{ width: 250 }}>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  aria-labelledby="price-range-slider"
                />
              </Box>
            </div>
          </div>
          <div className="flex justify-between border-t items-center">
            <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
              Use
            </h2>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex justify-between border-t items-center">
            <h2 className="text-[14px] md:text-[16px] py-2 font-semibold text-[#1F2533]">
              Additional Characteristic
            </h2>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SortDropdown = ({ selectedSortOption, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedSortOption);

  const options = [
    "Most expensive",
    "Least expensive",
    "Most popular",
    "Newest",
  ];

  const handleSortChange = (option) => {
    setSelectedOption(option);
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full  text-left">
      <button
        type="button"
        className="inline-flex justify-between items-center w-full rounded-full border border-gray-300 shadow-sm px-6 py-2 bg-white text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className=" flex flex-col  text-start">
          <p className="text-[14px] text-[#70737C]"> Sort by </p>

          <p className="text-[#1F2533] text-[16px] font-medium">{selectedOption}</p>
        </div>
        <MdOutlineKeyboardArrowDown className="ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSortChange(option)}
                className={`block px-4 py-2 text-sm ${
                  selectedOption === option
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } w-full text-left`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

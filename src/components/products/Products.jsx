import React from "react";
import { ProductsData } from "../../data/ProductsData";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="max-w-[1150px] py-[50px] mx-auto px-5">
      <div className="flex gap-[20px]">
        <div className="w-[30%] ">
          <h2 className="text-[14px] border-b py-2  font-medium text-[#1F2533]">
            FILTERS
          </h2>
          <h2 className="text-[16px] border-b py-2 font-semibold text-[#1F2533]">
            Seed type
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          {ProductsData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

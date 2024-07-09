import React, { useState } from "react";
// import ProductCard from "./HomeCart";
import { ProductsData } from "../../data/ProductsData";
import CategoriesComp from "../products/CategoriesComp";
import ProductCard from "../products/ProductCard";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

const HomeProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();
  const filteredProducts = ProductsData.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className=" max-w-[1150px] mx-auto px-5">
      <div className="flex justify-between items-center mb-[40px] ">
        <p className=" custom-title">Our products.</p>
        <button className=" custom-btn">View all (12)</button>
      </div>

      {/*  Categories */}
      <div className="py-6">
        <CategoriesComp
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
      </div>

      {/*  Carts */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] border mb-[90px] ">
        {filteredProducts.map((product) => (
          <ProductCard item={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;

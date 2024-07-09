import React from "react";
import img from "../../assets/home/opa.png";
const HomeInfo = () => {
  return (
    <div className=" max-w-[1150px] mx-auto px-5">
      <div className="flex justify-between md:flex-row flex-col items-center  gap-[84px] mb-[60px] ">
        <div className=" md:w-1/2 flex flex-col gap-[30px]">
          <p className=" custom-title">
            Seedra helps to grow fast and efficiant
          </p>
          <p className="text-[#1F2533] text-[16px] font-light leading-[28px]">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
          </p>
          <p className="text-[#1F2533] text-[16px] font-light leading-[28px]">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our
            guarantee Spinach commom culinary uses: salads, soups, smoothies,
            lasagne, pizza, pies, risotto, and more
          </p>
          <p className="text-[#1F2533] text-[16px] font-light leading-[28px]">
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>

        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

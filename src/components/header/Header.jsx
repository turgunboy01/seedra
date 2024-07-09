import { AiFillInstagram } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white shadow-lg flex items-center fixed z-10 top-0 w-full h-[72px] mb-[32px] ">
      <div className=" container flex justify-between items-center">
        <img src="./public/home/homeLogo.svg" alt="image" />

        <ul className=" hidden lg:flex items-center text-[--second] text-[14px] leading-[178.187%]">
          <li className=" pr-[16px] border-r ">ALL PRODUCTS</li>
          <li className=" px-[16px] border-r  ">ABOUT SEEDRA</li>
          <li className=" px-[16px] border-r ">OUR BLOG</li>
          <li className=" pl-[16px] ">CONTACTS</li>
        </ul>

        <div className="flex items-center gap-[13px] ">
          <div className="hidden lg:flex items-center gap-2 ">
            <AiFillInstagram className=" cursor-pointer hover:text-[--green] duration-200 w-[24px] h-[24px] text-[--second]  " />
            <FaFacebook className=" cursor-pointer hover:text-[--green] duration-200 w-[20px] h-[20px] text-[--second]  " />
          </div>

          <div className=" hidden lg:flex border max-w-[287px] w-full  items-center gap-[16px] py-[10px] px-[20px] rounded-full borrder-[#EFEFEF] overflow-hidden  ">
            <label htmlFor="search">
              <BiSearch className=" text-[--second] w-[24px] h-[24px] " />
            </label>
            <input
              type="text"
              id="search"
              className="text-[14px] w-full outline-none "
            />
          </div>

          <div className="flex items-center gap-[24px] ">
            <span className="border border-[--second] rounded-full p-2 lg:border-none lg:p-0 ">
              <img
                src="./public/home/homeheart.svg"
                alt=""
                className="min-w-[24px] min-h-[24px] "
              />
            </span>
            <span className="border border-[--second] rounded-full p-2 lg:border-none lg:p-0 ">
              <img
                src="./public/home/homeCart.svg"
                alt=""
                className="min-w-[24px] min-h-[24px] "
              />
            </span>
            <span className="lg:hidden">
              <CgMenuRight className="text-[24px] " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { AiFillInstagram } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/home/homeLogo.svg";
import img1 from "../../assets/home/homeHeart.svg";
import img2 from "../../assets/home/homeCart.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#fff] w-full fixed top-0 shadow-lg z-40 py-2">
      <div className="max-w-[1150px] mx-auto px-5">
        <div className=" flex justify-between items-center">
          <img src={logo} alt="image" />

          <ul className=" hidden lg:flex items-center text-[--second] text-[14px] gap-3 leading-[178.187%]">
            <li className=" pr-[16px] border-r ">ALL PRODUCTS</li>
            <li className=" px-[16px] border-r  ">ABOUT SEEDRA</li>
            <li className=" px-[16px] border-r ">OUR BLOG</li>
            <Link to={"/contact"} className=" pl-[16px] ">
              CONTACTS
            </Link>
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
                <img src={img1} alt="" className="min-w-[24px] min-h-[24px] " />
              </span>
              <span className="border border-[--second] rounded-full p-2 lg:border-none lg:p-0 ">
                <img src={img2} alt="" className="min-w-[24px] min-h-[24px] " />
              </span>
              <span className="lg:hidden">
                <CgMenuRight className="text-[24px] " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

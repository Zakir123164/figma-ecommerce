import React from "react";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/Images/SHOP.CO.png";

const Navbar = () => {
  return (
    <section id="ZakirNav" className="flex justify-between items-center p-4">
      <div className="navlogo">
        <img className="bg-white w-[120px]" src={logo} alt="logo" />
      </div>

      <ul className="flex gap-6 text-[#000000] font-normal">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/">On Sale</Link></li>
        <li><Link to="/">New Arrivals</Link></li>
        <li><Link to="/">Brands</Link></li>
      </ul>

      <div className="flex items-center w-[577px] h-[49px] rounded-full bg-[#F0F0F0] px-[25px]">
        <CiSearch className="text-[20px] mr-[13px] text-[#00000080]" />
        <input
          className="border-0 outline-0 bg-transparent text-[#00000080] w-full"
          type="text"
          placeholder="Search in products"
        />
      </div>

      <div className="flex gap-[13px] text-[24px] text-[#000000]">
        <FiShoppingCart />
        <FaRegUserCircle/>
      </div>
    </section>
  );
};

export default Navbar;

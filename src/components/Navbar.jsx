// import React from "react";
// import { Link } from "react-router";
// import { FiShoppingCart } from "react-icons/fi";
// import { FaRegUserCircle } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import logo from "../assets/Images/SHOP.CO.png";

// const Navbar = () => {
//   return (
//     <section id="ZakirNav">
//     <div className="container">
//        <div className="navbar  flex justify-between items-center p-4">
//        <div className="navlogo">
//         <img className="bg-white w-[120px]" src={logo} alt="logo" />
//       </div>

//       <ul className="flex gap-6 text-[#000000] font-normal">
//         <li><Link to="/">Shop</Link></li>
//         <li><Link to="/">On Sale</Link></li>
//         <li><Link to="/">New Arrivals</Link></li>
//         <li><Link to="/">Brands</Link></li>
//       </ul>

//       <div className="flex items-center w-[577px] h-[49px] rounded-full bg-[#F0F0F0] px-[25px]">
//         <CiSearch className="text-[20px] mr-[13px] text-[#00000080]" />
//         <input
//           className="border-0 outline-0 bg-transparent text-[#00000080] w-full"
//           type="text"
//           placeholder="Search in products"
//         />
//       </div>

//       <div className="flex gap-[13px] text-[24px] text-[#000000]">
//         <FiShoppingCart />
//           <Link to={"/login"} className="text-[#000000] font-medium">
//             <FaRegUserCircle/>  
//           </Link>

//       </div>
//      </div>
//     </div>
//     </section>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/Images/SHOP.CO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-28 sm:w-32" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-[#000000] font-normal">
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">On Sale</Link></li>
          <li><Link to="/">New Arrivals</Link></li>
          <li><Link to="/">Brands</Link></li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-64 sm:w-80 lg:w-[400px] h-10 rounded-full bg-[#F0F0F0] px-4">
          <CiSearch className="text-lg mr-2 text-[#00000080]" />
          <input
            className="border-0 outline-0 bg-transparent text-sm sm:text-base w-full"
            type="text"
            placeholder="Search in products"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4 text-2xl text-[#000000]">
          <FiShoppingCart />
          <Link to={"/login"}><FaRegUserCircle /></Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#000000]"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-4 pb-4">
          <ul className="flex flex-col gap-4 text-[#000000] font-normal py-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>On Sale</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Brands</Link></li>
          </ul>

          {/* Mobile Search */}
          <div className="flex items-center w-full h-10 rounded-full bg-[#F0F0F0] px-4 mt-2">
            <CiSearch className="text-lg mr-2 text-[#00000080]" />
            <input
              className="border-0 outline-0 bg-transparent text-sm w-full"
              type="text"
              placeholder="Search in products"
            />
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 text-2xl text-[#000000] mt-3">
            <FiShoppingCart />
            <Link to={"/login"}><FaRegUserCircle /></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
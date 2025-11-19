import React from "react";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/Images/SHOP.CO.png";

const Navbar = () => {
  return (
    <section id="ZakirNav">
    <div className="container">
       <div className="navbar  flex justify-between items-center p-4">
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
          <Link to={"/login"} className="text-[#000000] font-medium">
            <FaRegUserCircle/>  
          </Link>

      </div>
     </div>
    </div>
    </section>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router";
// import { FiShoppingCart } from "react-icons/fi";
// import { FaRegUserCircle } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";
// import logo from "../assets/Images/SHOP.CO.png";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <section id="ZakirNav" className="w-full shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="navbar flex justify-between items-center py-4">

//           {/* LOGO */}
//           <div className="navlogo">
//             <img className="w-[120px]" src={logo} alt="logo" />
//           </div>

//           {/* NAV LINKS (DESKTOP) */}
//           <ul className="hidden lg:flex gap-8 text-[#000000] font-medium">
//             <li><Link to="/">Shop</Link></li>
//             <li><Link to="/">On Sale</Link></li>
//             <li><Link to="/">New Arrivals</Link></li>
//             <li><Link to="/">Brands</Link></li>
//           </ul>

//           {/* SEARCH BAR (DESKTOP) */}
//           <div className="hidden lg:flex items-center w-[400px] h-[45px] rounded-full bg-[#F0F0F0] px-6">
//             <CiSearch className="text-[20px] mr-3 text-[#00000080]" />
//             <input
//               className="border-0 outline-0 bg-transparent text-[#00000080] w-full"
//               type="text"
//               placeholder="Search products"
//             />
//           </div>

//           {/* ICONS */}
//           <div className="hidden lg:flex gap-4 text-[26px] text-[#000000]">
//             <FiShoppingCart />
//             <FaRegUserCircle />
//           </div>

//           {/* MOBILE HAMBURGER */}
//           <button
//             className="lg:hidden text-3xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <IoClose /> : <RxHamburgerMenu />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             open ? "max-h-[400px] mt-4" : "max-h-0"
//           }`}
//         >
//           {/* SEARCH MOBILE */}
//           <div className="flex items-center w-full h-[45px] rounded-full bg-[#F0F0F0] px-6 mb-4">
//             <CiSearch className="text-[20px] mr-3 text-[#00000080]" />
//             <input
//               className="border-0 outline-0 bg-transparent text-[#00000080] w-full"
//               type="text"
//               placeholder="Search products"
//             />
//           </div>

//           {/* NAV LINKS MOBILE */}
//           <ul className="flex flex-col gap-4 text-[#000000] text-lg font-medium">
//             <li><Link to="/" onClick={() => setOpen(false)}>Shop</Link></li>
//             <li><Link to="/" onClick={() => setOpen(false)}>On Sale</Link></li>
//             <li><Link to="/" onClick={() => setOpen(false)}>New Arrivals</Link></li>
//             <li><Link to="/" onClick={() => setOpen(false)}>Brands</Link></li>
//           </ul>

//           {/* ICONS MOBILE */}
//           <div className="flex gap-5 text-[30px] text-[#000000] mt-6 mb-4">
//             <FiShoppingCart />
//             <FaRegUserCircle />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;

// import React from 'react'
// import { ImStarFull } from "react-icons/im";
// import fullshirt from '../assets/Images/Frame 32 (1).png'
// import tshirt2 from '../assets/Images/Frame 33 (1).png'
// import shortpant from '../assets/Images/Frame 34 (1).png'
// import pant2 from '../assets/Images/Frame 38 (1).png'


//  const TopSell = () => {
//   return (
//     <>
//       <div className="Arrivals">
//         <div className="container">
//            <div className="ArrivalHeading mt-[72px] mb-[55px] text-center text-[48px] font-secondary font-bold">
//             <h1>TOP SELLING</h1>
//            </div>
//            <div className="Product flex justify-between ">
//             <div className="singleProduct1">
//               <img className=' w-[295px] h-[298px] rounded-[20px]' src={fullshirt} alt="" />
//               <h2 className='mt-4 mb-2'>VERTICAL STRIPED SHIRT</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>5.0/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$212</h2>
//             </div>

//               <div className="singleProduct2">
//               <img className='  w-[295px] h-[298px]  rounded-[20px]' src={tshirt2} alt="" />
//               <h2 className='mt-4 mb-2'>COURAGE GRAPHIC T-SHIRT</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.0/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$145</h2>
//             </div>

//               <div className="singleProduc3">
//               <img className=' w-[295px] h-[298px]  rounded-[20px]' src={shortpant} alt="" />
//               <h2 className='mt-4 mb-2'>LOOSE FIT BERMUDA SHORTS</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>3.0/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$80</h2>
//             </div>

//               <div className="singleProduct4">
//               <img className='w-[295px] h-[298px]  rounded-[20px]' src={ pant2} alt="" />
//               <h2 className='mt-4 mb-2'>FADED SKINNY JEANS</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$210</h2>
//             </div>
//            </div>
//            <div className=' text-center mt-[37px] mb-[63px]'>
//           <button className='btn w-[218px] h-[52px] border-solid border-[3px] rounded-[62px] border-[#00000010]'>View All</button>
//            </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default TopSell

import React from 'react'
import { ImStarFull } from "react-icons/im";
import fullshirt from '../assets/Images/Frame 32 (1).png'
import tshirt2 from '../assets/Images/Frame 33 (1).png'
import shortpant from '../assets/Images/Frame 34 (1).png'
import pant2 from '../assets/Images/Frame 38 (1).png'

const TopSell = () => {
  return (
    <div className="Arrivals">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="ArrivalHeading mt-16 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-secondary font-bold">
            TOP SELLING
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="Product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">

          {/* Product 1 */}
          <div className="singleProduct1 w-full max-w-xs">
            <img className="w-full h-auto rounded-2xl" src={fullshirt} alt="VERTICAL STRIPED SHIRT" />
            <h2 className="mt-4 mb-2 font-semibold text-lg sm:text-xl">VERTICAL STRIPED SHIRT</h2>
            <div className="flex gap-1 items-center text-[#FFC633]">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
              <p className="ml-2 text-sm sm:text-base text-[#000] font-normal">5.0/5</p>
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-[#000] mt-1">$212</h2>
          </div>

          {/* Product 2 */}
          <div className="singleProduct2 w-full max-w-xs">
            <img className="w-full h-auto rounded-2xl" src={tshirt2} alt="COURAGE GRAPHIC T-SHIRT" />
            <h2 className="mt-4 mb-2 font-semibold text-lg sm:text-xl">COURAGE GRAPHIC T-SHIRT</h2>
            <div className="flex gap-1 items-center text-[#FFC633]">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
              <p className="ml-2 text-sm sm:text-base text-[#000] font-normal">4.0/5</p>
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-[#000] mt-1">$145</h2>
          </div>

          {/* Product 3 */}
          <div className="singleProduct3 w-full max-w-xs">
            <img className="w-full h-auto rounded-2xl" src={shortpant} alt="LOOSE FIT BERMUDA SHORTS" />
            <h2 className="mt-4 mb-2 font-semibold text-lg sm:text-xl">LOOSE FIT BERMUDA SHORTS</h2>
            <div className="flex gap-1 items-center text-[#FFC633]">
              <ImStarFull /><ImStarFull /><ImStarFull />
              <p className="ml-2 text-sm sm:text-base text-[#000] font-normal">3.0/5</p>
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-[#000] mt-1">$80</h2>
          </div>

          {/* Product 4 */}
          <div className="singleProduct4 w-full max-w-xs">
            <img className="w-full h-auto rounded-2xl" src={pant2} alt="FADED SKINNY JEANS" />
            <h2 className="mt-4 mb-2 font-semibold text-lg sm:text-xl">FADED SKINNY JEANS</h2>
            <div className="flex gap-1 items-center text-[#FFC633]">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
              <p className="ml-2 text-sm sm:text-base text-[#000000] font-normal">4.5/5</p>
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-[#000000] mt-1">$210</h2>
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-10 mb-16">
          <button className="btn w-44 h-12 sm:w-52 sm:h-14 border border-[#00000020] rounded-full text-base sm:text-lg">
            View All
          </button>
        </div>

      </div>
    </div>
  )
}

export default TopSell

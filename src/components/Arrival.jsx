// import React from 'react'
// import tshirt from '../assets/Images/Frame 32.png'
// import pant from '../assets/Images/Frame 33.png'
// import shirt from '../assets/Images/Frame 34.png'
// import polo from '../assets/Images/Frame 38.png'
// import { ImStarFull } from "react-icons/im";


// const Arrival = () => {
//   return (
//     <>
//       <div className="Arrivals">
//         <div className="container">
//            <div className="ArrivalHeading mt-[72px] mb-[55px] text-center text-[48px] font-bold  font-secondary">
//             <h1>NEW ARRIVALS</h1>
//            </div>
//            <div className="Product flex justify-between ">
//             <div className="singleProduct1">
//               <img className=' w-[295px] h-[298px] rounded-[20px]' src={tshirt} alt="" />
//               <h2 className='mt-4 mb-2'>T-SHIRT WITH TAPE DETAILS</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$240</h2>
//             </div>

//               <div className="singleProduct2">
//               <img className='  w-[295px] h-[298px]  rounded-[20px]' src={pant} alt="" />
//               <h2 className='mt-4 mb-2'>SKINNY FIT JEANS</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>3.5/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$240</h2>
//             </div>

//               <div className="singleProduc3">
//               <img className=' w-[295px] h-[298px]  rounded-[20px]' src={shirt} alt="" />
//               <h2 className='mt-4 mb-2'>CHECKERED SHIRT</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$180</h2>
//             </div>

//               <div className="singleProduct4">
//               <img className='w-[295px] h-[298px]  rounded-[20px]' src={polo} alt="" />
//               <h2 className='mt-4 mb-2'>SLEEVE STRIPED T-SHIRT</h2>
//               <div className='flex gap-[5px] text-[#FFC633]' >
//                 <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
//                 <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
//               </div>
//               <h2 className='font-bold text-[24px] text-[#000000]'>$130</h2>
//             </div>
//            </div>
//            <div className=' text-center mt-[35px] mb-[63px]'>
//           <button className='btn w-[218px] h-[52px] border-solid border-[3px] rounded-[62px] border-[#00000010]'>View All</button>
//            </div>
//            <hr className='text-[#00000010]' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Arrival

import React from 'react'
import tshirt from '../assets/Images/Frame 32.png'
import pant from '../assets/Images/Frame 33.png'
import shirt from '../assets/Images/Frame 34.png'
import polo from '../assets/Images/Frame 38.png'
import { ImStarFull } from "react-icons/im";

const Arrival = () => {
  return (
    <>
      <div className="Arrivals px-4 md:px-6 lg:px-10 py-10">
        <div className="container mx-auto">
          <div className="ArrivalHeading mt-[50px] md:mt-[72px] mb-10 md:mb-[55px] text-center text-3xl md:text-4xl lg:text-[48px] font-bold font-secondary">
            <h1>NEW ARRIVALS</h1>
          </div>

          <div className="Product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-between">

            {/* Card 1 */}
            <div className="singleProduct1 text-center lg:text-left">
              <img className='w-full h-[280px] sm:h-[300px] object-cover rounded-[20px]' src={tshirt} alt="" />
              <h2 className='mt-4 mb-2 text-[16px] sm:text-[18px] font-medium'>T-SHIRT WITH TAPE DETAILS</h2>
              <div className='flex justify-center lg:justify-start gap-[5px] text-[#FFC633]'>
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[20px] sm:text-[24px] text-[#000000]'>$240</h2>
            </div>

            {/* Card 2 */}
            <div className="singleProduct2 text-center lg:text-left">
              <img className='w-full h-[280px] sm:h-[300px] object-cover rounded-[20px]' src={pant} alt="" />
              <h2 className='mt-4 mb-2 text-[16px] sm:text-[18px] font-medium'>SKINNY FIT JEANS</h2>
              <div className='flex justify-center lg:justify-start gap-[5px] text-[#FFC633]'>
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>3.5/5</p>
              </div>
              <h2 className='font-bold text-[20px] sm:text-[24px] text-[#000000]'>$240</h2>
            </div>

            {/* Card 3 */}
            <div className="singleProduct3 text-center lg:text-left">
              <img className='w-full h-[280px] sm:h-[300px] object-cover rounded-[20px]' src={shirt} alt="" />
              <h2 className='mt-4 mb-2 text-[16px] sm:text-[18px] font-medium'>CHECKERED SHIRT</h2>
              <div className='flex justify-center lg:justify-start gap-[5px] text-[#FFC633]'>
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[20px] sm:text-[24px] text-[#000000]'>$180</h2>
            </div>

            {/* Card 4 */}
            <div className="singleProduct4 text-center lg:text-left">
              <img className='w-full h-[280px] sm:h-[300px] object-cover rounded-[20px]' src={polo} alt="" />
              <h2 className='mt-4 mb-2 text-[16px] sm:text-[18px] font-medium'>SLEEVE STRIPED T-SHIRT</h2>
              <div className='flex justify-center lg:justify-start gap-[5px] text-[#FFC633]'>
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[20px] sm:text-[24px] text-[#000000]'>$130</h2>
            </div>

          </div>

          <div className='text-center mt-[35px] mb-[63px]'>
            <button className='btn w-[180px] sm:w-[218px] h-[48px] sm:h-[52px] border-solid border-[3px] rounded-[62px] border-[#00000010]'>View All</button>
          </div>

          <hr className='text-[#00000010]' />
        </div>
      </div>
    </>
  )
}

export default Arrival

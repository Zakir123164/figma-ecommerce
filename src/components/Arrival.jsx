import React from 'react'
import tshirt from '../assets/Images/Frame 32.png'
import pant from '../assets/Images/Frame 33.png'
import shirt from '../assets/Images/Frame 34.png'
import polo from '../assets/Images/Frame 38.png'
import { ImStarFull } from "react-icons/im";


const Arrival = () => {
  return (
    <>
      <div className="Arrivals">
        <div className="container">
           <div className="ArrivalHeading mt-[72px] mb-[55px] text-center text-[48px] font-bold  font-secondary">
            <h1>NEW ARRIVALS</h1>
           </div>
           <div className="Product flex justify-between ">
            <div className="singleProduct1">
              <img className=' w-[295px] h-[298px] rounded-[20px]' src={tshirt} alt="" />
              <h2 className='mt-4 mb-2'>T-SHIRT WITH TAPE DETAILS</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$240</h2>
            </div>

              <div className="singleProduct2">
              <img className='  w-[295px] h-[298px]  rounded-[20px]' src={pant} alt="" />
              <h2 className='mt-4 mb-2'>SKINNY FIT JEANS</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>3.5/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$240</h2>
            </div>

              <div className="singleProduc3">
              <img className=' w-[295px] h-[298px]  rounded-[20px]' src={shirt} alt="" />
              <h2 className='mt-4 mb-2'>CHECKERED SHIRT</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$180</h2>
            </div>

              <div className="singleProduct4">
              <img className='w-[295px] h-[298px]  rounded-[20px]' src={polo} alt="" />
              <h2 className='mt-4 mb-2'>SLEEVE STRIPED T-SHIRT</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$130</h2>
            </div>
           </div>
           <div className=' text-center mt-[35px] mb-[63px]'>
          <button className='btn w-[218px] h-[52px] border-solid border-[3px] rounded-[62px] border-[#00000010]'>View All</button>
           </div>
           <hr className='text-[#00000010]' />
        </div>
      </div>
    </>
  )
}

export default Arrival
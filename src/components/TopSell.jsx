import React from 'react'
import { ImStarFull } from "react-icons/im";
import fullshirt from '../assets/Images/Frame 32 (1).png'
import tshirt2 from '../assets/Images/Frame 33 (1).png'
import shortpant from '../assets/Images/Frame 34 (1).png'
import pant2 from '../assets/Images/Frame 38 (1).png'


 const TopSell = () => {
  return (
    <>
      <div className="Arrivals">
        <div className="container">
           <div className="ArrivalHeading mt-[72px] mb-[55px] text-center text-[48px] font-secondary font-bold">
            <h1>TOP SELLING</h1>
           </div>
           <div className="Product flex justify-between ">
            <div className="singleProduct1">
              <img className=' w-[295px] h-[298px] rounded-[20px]' src={fullshirt} alt="" />
              <h2 className='mt-4 mb-2'>VERTICAL STRIPED SHIRT</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>5.0/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$212</h2>
            </div>

              <div className="singleProduct2">
              <img className='  w-[295px] h-[298px]  rounded-[20px]' src={tshirt2} alt="" />
              <h2 className='mt-4 mb-2'>COURAGE GRAPHIC T-SHIRT</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.0/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$145</h2>
            </div>

              <div className="singleProduc3">
              <img className=' w-[295px] h-[298px]  rounded-[20px]' src={shortpant} alt="" />
              <h2 className='mt-4 mb-2'>LOOSE FIT BERMUDA SHORTS</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>3.0/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$80</h2>
            </div>

              <div className="singleProduct4">
              <img className='w-[295px] h-[298px]  rounded-[20px]' src={ pant2} alt="" />
              <h2 className='mt-4 mb-2'>FADED SKINNY JEANS</h2>
              <div className='flex gap-[5px] text-[#FFC633]' >
                <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                <p className='ml-[13px] text-[#000000] font-normal text-[14px]'>4.5/5</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#000000]'>$210</h2>
            </div>
           </div>
           <div className=' text-center mt-[37px] mb-[63px]'>
          <button className='btn w-[218px] h-[52px] border-solid border-[3px] rounded-[62px] border-[#00000010]'>View All</button>
           </div>
        </div>
      </div>
    </>
  )
}

export default TopSell
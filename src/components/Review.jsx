import React from 'react'
import { ImStarFull } from 'react-icons/im'

const Review = () => {
  return (
    <>
        <div className="Review">
            <div className="container">
             <div className="ArrivalHeading mt-[72px] mb-[55px] text-[48px] font-bold  font-secondary">
            <h1>OUR HAPPY CUSTOMERS</h1>
           </div>
           <div className="ReviewCard flex justify-between items-center">
            <div className="singleRvwCard pt-7 pb-[50px] w-[400px] px-8 h-60 rounded-[20px] border border-[#00000010]">
                <div className="rvwRate flex gap-[5px] text-[#FFC633] ">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                </div>
                <h2 className='mt-[15px] font-bold text-[20px]'>Sarah M.</h2>
                <p className='w-[336px] mt-3 font-normal font-primary text-[#00000060]'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>

            <div className="singleRvwCard pt-7 pb-[50px] w-[400px] px-8 h-60 rounded-[20px] border-1 border-[#00000010]">
                <div className="rvwRate flex gap-[5px] text-[#FFC633] ">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                </div>
                <h2 className='mt-[15px] font-bold text-[20px]'>James L.</h2>
                <p className='w-[336px] mt-3 font-normal font-primary text-[#00000060]'>
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
              </p>
            </div>

            <div className="singleRvwCard pt-7 pb-[50px] w-[400px] px-8 h-60 rounded-[20px] border-1 border-[#00000010]">
                <div className="rvwRate flex gap-[5px] text-[#FFC633] ">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                </div>
                <h2 className='mt-[15px] font-bold text-[20px]'>Alex K.</h2>
                <p className='w-[336px] mt-3 font-normal font-primary text-[#00000060]'>
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>

            {/* <div className="singleRvwCard pt-7 pb-[50px] w-[400px] px-8 h-60 rounded-[20px] border-1 border-[#00000010]">
                <div className="rvwRate flex gap-[5px] text-[#FFC633] ">
              <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
                </div>
                <h2 className='mt-[15px] font-bold text-[20px]'>Mooen</h2>
                <p className='w-[336px] mt-3 font-normal text-[#00000060]'>
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
           </p>
            </div> */}
           </div>
            </div>
        </div>
    </>
  )
}

export default Review
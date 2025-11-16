import React from 'react'
import img1 from '../assets/Images/Frame 61.png'
import img2 from '../assets/Images/Frame 62.png'
import img3 from '../assets/Images/Frame 64.png'
import img4 from '../assets/Images/Frame 63.png'
const Style = () => {
  return (
    <section id='DressStyle'>
               <div className="container">
                    <div className="CardStyle w-full h-[866px] bg-[#F0F0F0] rounded-[40px] ">
                        <div className="StyleHead">
                            <h1 className='text-center  pt-[70px] pb-16 font-bold text-[48px]  font-secondary'>BROWSE BY DRESS STYLE</h1>
                       </div>
                       <div className="singleCart flex justify-evenly items-center ">
                     <img src={img1} alt="Casual" />
                     <img src={img2}alt="Formal" />
                    </div>

                    <div className="singleCart flex justify-evenly items-center mt-5">
                     <img src={img3} alt="Party" />
                     <img src={img4} alt="Gym" />
                    </div>
                </div>
               </div>
           </section>
  )
}

export default Style
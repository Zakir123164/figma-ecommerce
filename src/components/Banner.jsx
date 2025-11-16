import React from 'react'
import bannerP from '../assets/Images/Frame 127.png'
import brandP1 from '../assets/Images/Group.png'
import brandP2 from '../assets/Images/zara-logo-1 1.png'
import brandP3 from '../assets/Images/gucci-logo-1 1.png'
import brandP4 from '../assets/Images/prada-logo-1 1.png'
import brandP5 from '../assets/Images/Group (1).png'

const Banner = () => {

  return (
    <>
    <section id='Banner'>
     <div className='banner-img mt-6'> 
    <img className='w-full bg-cover bg-center' src={bannerP} alt="banner" />   
    </div>
    <div className='brandDetails bg-[#000000] w-full h-[122px]'>
     <div className='container flex justify-between items-center py-[43px]'>
      <img src={brandP1} alt="Versace" />
      <img src={brandP2} alt="Zara" />
      <img src={brandP3} alt="Gucci" />
      <img src={brandP4} alt="Prada" />
      <img src={brandP5} alt="Calvin" />
     </div>
      </div>
   

    </section>

    </>
  )
}

export default Banner
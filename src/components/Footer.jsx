// import React from 'react'
// import flogo from '../assets/Images/SHOP.CO.png'
// import {AiOutlineGithub } from "react-icons/ai";
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import fimg1 from '../assets/Images/Badge.png'
// import fimg2 from '../assets/Images/Badge (1).png'
// import fimg3 from '../assets/Images/Badge (2).png'
// import fimg4 from '../assets/Images/Badge (3).png'
// import fimg5 from '../assets/Images/Badge (4).png'
// import { TfiEmail } from 'react-icons/tfi';

// const Footer = () => {
//   return (
//     <>
//        <section className="footer mt-[170px] relative">
//            <div className="container]">
//            <div className="foterDiv w-full h-[499px bg-[#F0F0F0] pt-[140px] px-[101px]">
//             <div className="footerContent flex justify-between">
//                 <div>
//                   <img src={flogo} alt="" />
//                   <p className='mt-[52px] mb-[35px] w-[284px] font-normal -normal font-primary text-[16px] text-[#00000060]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
//                   <ul className='flex gap-3'>
//                   <li><a href="#"><FaTwitter className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]' /></a></li>
//                   <li><a href="#"><FaFacebook className='w-7 h-7'  /></a></li>
//                   <li><a href="#"><FaInstagram className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]'  /></a></li>
//                   <li><a href="#"><AiOutlineGithub className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]'  /></a></li>
//                   </ul>
//                 </div>
                     
//                     <div>
//                      <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>COMPANY </h2>
//                   <ul className=' font-normal -normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Features</a></li>
//                     <li><a href="#">Works</a></li>
//                     <li><a href="#">Career</a></li>
//                      </ul>
//                      </div>

//                 <div>
//                      <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>HELP</h2>
//                   <ul className=' font-normal -normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
//                     <li><a href="#">Customer Support</a></li>
//                     <li><a href="#">Delivery Details</a></li>
//                     <li><a href="#">Terms & Condition</a></li>
//                     <li><a href="#">Privacy Policy</a></li>
//                      </ul>
//                 </div>

//                 <div>
//                 <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>FQA</h2>
//                   <ul className=' font-normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
//                     <li><a href="#">Account</a></li>
//                     <li><a href="#">Manage Deliveries</a></li>
//                     <li><a href="#">Orders</a></li>
//                     <li><a href="#">Payments</a></li>
//                      </ul>
//                 </div>
                
//                 <div>
//                 <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px] mb-[26px]'>RESOURCES</h2>
//                   <ul className=' font-normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
//                     <li><a href="#">Free eBooks</a></li>
//                     <li><a href="#">Development Tutorial</a></li>
//                     <li><a href="#">How to- Blog</a></li>
//                     <li><a href="#">Youtube Playlist</a></li>
//                      </ul>
//                 </div>
                

//             </div>

//             <div className="emailPart relative top-[-460px] left-0 w-full h-[180px] bg-[#000000]  rounded-[20px] pl-16  py-[43px]  flex justify-between items-center ">
//                <div className="emailContain w-[551px] font-bold font-secondary text-[40px] text-[#ffffff]">
//                 <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
//                </div>
//                <div className="emailInput pr-16">
//                 <div>
//                   <input className='pl-6 w-[349px] h-12 bg-[#ffffff] rounded-4xl outline-0' type="email" placeholder='Enter your email address' />
//                </div>
//                 <br />
//                 <button className='w-[349px] h-12 bg-[#ffffff] rounded-4xl'>Subscribe to Newsletter</button>
//                 </div>
//             </div>

//             <hr className='text-[#00000010]' />

//             <div className="footer2 flex justify-between items-center">
//             <div>
//               <p className='mt-[25px] mb-[99px] font-normal font-primary text-[14px] text-[#00000060]'>Shop.co © 2000-2023, All Rights Reserved</p>
//               </div>
//             <div className='flex gap-3 mt-5 mb-[93px]'>
//               <img src={fimg1} alt="" />
//               <img src={fimg2} alt="" />
//               <img src={fimg3} alt="" />
//               <img src={fimg4} alt="" />
//               <img src={fimg5} alt="" />

//               </div>
//            </div>
//            </div>
          
//    </div>
     
//        </section>
//     </>
//   )
// }

// export default Footer

import React from 'react'
import flogo from '../assets/Images/SHOP.CO.png'
import {AiOutlineGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import fimg1 from '../assets/Images/Badge.png'
import fimg2 from '../assets/Images/Badge (1).png'
import fimg3 from '../assets/Images/Badge (2).png'
import fimg4 from '../assets/Images/Badge (3).png'
import fimg5 from '../assets/Images/Badge (4).png'

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] mt-16 relative">
      <div className="container mx-auto px-4 pt-16 md:pt-24">

        {/* Footer Main */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 justify-between">

          {/* Logo & Description */}
          <div className="flex-1 min-w-[200px]">
            <img src={flogo} alt="Shop.co Logo" className="w-28 sm:w-32" />
            <p className="mt-4 mb-4 text-[#00000080] text-sm sm:text-base max-w-xs">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <ul className="flex gap-3">
              <li><a href="#"><FaTwitter className='w-7 h-7 p-1 sm:p-2 bg-white rounded-full border border-[#00000020]' /></a></li>
              <li><a href="#"><FaFacebook className='w-7 h-7 p-1 sm:p-2 bg-white rounded-full border border-[#00000020]' /></a></li>
              <li><a href="#"><FaInstagram className='w-7 h-7 p-1 sm:p-2 bg-white rounded-full border border-[#00000020]' /></a></li>
              <li><a href="#"><AiOutlineGithub className='w-7 h-7 p-1 sm:p-2 bg-white rounded-full border border-[#00000020]' /></a></li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 sm:gap-12 flex-1 justify-between">
            {["COMPANY", "HELP", "FQA", "RESOURCES"].map((section, idx) => (
              <div key={idx} className="min-w-[120px]">
                <h2 className='font-medium text-sm sm:text-base text-[#000000] tracking-widest mb-4'>{section}</h2>
                <ul className='flex flex-col gap-2 sm:gap-3 text-[#00000080] text-sm sm:text-base'>
                  {section === "COMPANY" && ["About", "Features", "Works", "Career"].map(item => (
                    <li key={item}><a href="#" className='hover:text-[#000000] transition'>{item}</a></li>
                  ))}
                  {section === "HELP" && ["Customer Support", "Delivery Details", "Terms & Condition", "Privacy Policy"].map(item => (
                    <li key={item}><a href="#" className='hover:text-[#0000000] transition'>{item}</a></li>
                  ))}
                  {section === "FQA" && ["Account", "Manage Deliveries", "Orders", "Payments"].map(item => (
                    <li key={item}><a href="#" className='hover:text-[#000000] transition'>{item}</a></li>
                  ))}
                  {section === "RESOURCES" && ["Free eBooks", "Development Tutorial", "How to- Blog", "Youtube Playlist"].map(item => (
                    <li key={item}><a href="#" className='hover:text-[#000000] transition'>{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Email Subscription */}
        <div className="bg-black text-white rounded-xl mt-12 p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-md text-center md:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input type="email" placeholder="Enter your email address"
              className="w-full md:w-72 h-10 sm:h-12 px-4 rounded-full outline-none text-black text-sm sm:text-base  bg-[#ffffff]J" />
            <button className="w-full md:w-auto h-10 sm:h-12 px-6 bg-white text-black font-semibold rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="my-6 border-[#00000020]" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pb-8">
          <p className="text-[#00000080] text-sm sm:text-base">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
            {[fimg1, fimg2, fimg3, fimg4, fimg5].map((img, idx) => (
              <img key={idx} src={img} alt={`badge-${idx}`} className="h-6 sm:h-8" />
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
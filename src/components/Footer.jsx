import React from 'react'
import flogo from '../assets/Images/SHOP.CO.png'
import {AiOutlineGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import fimg1 from '../assets/Images/Badge.png'
import fimg2 from '../assets/Images/Badge (1).png'
import fimg3 from '../assets/Images/Badge (2).png'
import fimg4 from '../assets/Images/Badge (3).png'
import fimg5 from '../assets/Images/Badge (4).png'
import { TfiEmail } from 'react-icons/tfi';

const Footer = () => {
  return (
    <>
       <section className="footer mt-[170px] relative">
           <div className="container]">
           <div className="foterDiv w-full h-[499px bg-[#F0F0F0] pt-[140px] px-[101px]">
            <div className="footerContent flex justify-between">
                <div>
                  <img src={flogo} alt="" />
                  <p className='mt-[52px] mb-[35px] w-[284px] font-normal -normal font-primary text-[16px] text-[#00000060]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                  <ul className='flex gap-3'>
                  <li><a href="#"><FaTwitter className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]' /></a></li>
                  <li><a href="#"><FaFacebook className='w-7 h-7'  /></a></li>
                  <li><a href="#"><FaInstagram className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]'  /></a></li>
                  <li><a href="#"><AiOutlineGithub className='w-7 h-7 p-[5px] bg-white rounded-full border border-[#00000020]'  /></a></li>
                  </ul>
                </div>
                     
                    <div>
                     <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>COMPANY </h2>
                  <ul className=' font-normal -normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                     </ul>
                     </div>

                <div>
                     <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>HELP</h2>
                  <ul className=' font-normal -normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                     </ul>
                </div>

                <div>
                <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px]  mb-[26px]'>FQA</h2>
                  <ul className=' font-normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                     </ul>
                </div>
                
                <div>
                <h2 className='font-medium text-[16px] text-[#000000] tracking-[3px] mb-[26px]'>RESOURCES</h2>
                  <ul className=' font-normal font-primary text-[16px] text-[#00000060] flex flex-col gap-5'>
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to- Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                     </ul>
                </div>
                

            </div>

            <div className="emailPart relative top-[-460px] left-0 w-full h-[180px] bg-[#000000]  rounded-[20px] pl-16  py-[43px]  flex justify-between items-center ">
               <div className="emailContain w-[551px] font-bold font-secondary text-[40px] text-[#ffffff]">
                <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
               </div>
               <div className="emailInput pr-16">
                <div>
               <input className='pl-6 w-[349px] h-12 bg-[#ffffff] rounded-4xl outline-0' type="email" placeholder='Enter your email address' /></div>
                <br />
                <button className='w-[349px] h-12 bg-[#ffffff] rounded-4xl'>Subscribe to Newsletter</button>
                </div>
            </div>

            <hr className='text-[#00000010]' />

            <div className="footer2 flex justify-between items-center">
            <div>
              <p className='mt-[25px] mb-[99px] font-normal font-primary text-[14px] text-[#00000060]'>Shop.co © 2000-2023, All Rights Reserved</p>
              </div>
            <div className='flex gap-3 mt-5 mb-[93px]'>
              <img src={fimg1} alt="" />
              <img src={fimg2} alt="" />
              <img src={fimg3} alt="" />
              <img src={fimg4} alt="" />
              <img src={fimg5} alt="" />

              </div>
           </div>
           </div>
          
   </div>
     
       </section>
    </>
  )
}

export default Footer
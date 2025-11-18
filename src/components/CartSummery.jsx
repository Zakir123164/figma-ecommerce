import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import {Link } from 'react-router'
import { IoMdArrowForward } from "react-icons/io";
import { BiLabel } from 'react-icons/bi';
import img1 from '../assets/Images/image_8__3_-removebg-preview.png'


const Cart = () => {
  return (
    <> 
      <section className="cart">
           <div className="container">
            <hr className='mb-[70px] mt-7 text-[#00000010]' />
             <div className="heading font-bold font-secondary text-[40px] mb-7 mt-7 text-[#000000]">
              <h1>YOUR CART</h1>
             </div>
             <div className="summery_card flex justify-between items-center">
               <div className="product_cart w-[715px] h-[508px] border rounded-[20px]  py-6 px-5 border-[#00000010]">





                   <div className="Product_cart_details flex justify-between ">
                    {/* ------------- product-deails */}
                    <div className="product_details flex gap-4">
                      <div className="Product_image w-[124px] h-[124px] bg-[#F0EEED] rounded-[9px]">
                         <img src={img1} alt="product image" />
                      </div>
                      <div className="product_img_details">
                        <h2 className='font-bold font-primary text-[20px] text-[#000000] mb-[3px]'>Gradient Graphic T-shirt</h2>
                        <p className='font-normal font-primary text-[14px] text-[#000000]'>Size: <span className='font-normal font-primary text-[14px] text-[#00000060]'>Large</span></p>
                        <p className='font-bold font-primary text-[20px] text-[#000000] mb-[3px]'>Color: <span className='font-normal font-primary text-[14px] text-[#00000060]'> White</span></p>
                        <h3 className='font-bold font-primary text-[24px] text-[#000000]'>$145</h3>
                      </div>
                    </div>
                            {/* ------------- product add -------------- */}
                    <div className="product_add flex flex-col">

                    <button className="product_icon flex mb-[55px] justify-end"><RiDeleteBinLine /></button>
                    <div className="product_cart_count w-[126px] h-11 rounded-[62px] bg-[#F0F0F0] flex justify-evenly items-center">
                       <button>-</button>
                       <h2>1</h2>
                       <button>+</button>
                    </div>
                    </div>
                    </div>  















               </div>
               <div className="order_cart w-[505px] h-[458px] border rounded-[20px] border-[#00000010] py-5 px-6">
                       <h2 className='font-bold font-primary text-[24px] text-[#000000] mb-6'>Order Summary</h2>
                       <div className='flex justify-between items-center'>
                        <p className='font-normal font-primary text-[20px] text-[#00000060]'>Subtotal</p>
                        <h4 className='font-bold font-primary text-[20px] text-[#000000]'>$565</h4>
                       </div>

                        <div className='flex justify-between items-center mt-5'>
                        <p className='font-normal font-primary text-[20px] text-[#00000060]'>Discount (-20%)</p>
                        <h4 className='font-bold font-primary text-[20px] text-[#FF3333]'>-$113</h4>
                       </div>

                        <div className='flex justify-between items-center mt-5'>
                        <p className='font-normal font-primary text-[20px] text-[#00000060]'>Delivery Fee</p>
                        <h4 className='font-bold font-primary text-[20px] text-[#000000]'>$15</h4>
                       </div>

                       <hr className='mt-5 text-[#00000010]' />

                       <div className='flex justify-between items-center mt-5'>
                        <p className='font-normal font-primary text-[20px] text-[#000000]'>Total</p>
                        <h4 className='font-bold font-primary text-[20px] text-[#000000]'>$467</h4>
                       </div>

                       <div className="promo_button flex justify-between items-center mt-6 mb-6">
                       <div className='w-[326px] flex items-center gap-2.5 px-4 rounded-[62px] bg-[#F0F0F0] '>
                        <BiLabel className='text-[24px] text-[#00000040]'/>
                      <input className='w-full py-[13px] ml-3 outline-none text-[#00000040] text-[16px] font-primary font-normal ' type="text" placeholder='Add promo code' />
                       </div>
                          <button className='btn w-[119px] h-12 rounded-[62px] bg-[#000000] text-[#FFFFFF] font-medium font-primary text-[16px]'>Apply</button>
                       </div>

                       <Link to={'/'} className='w-[457px] h-15 rounded-[62px] bg-[#000000] flex justify-center items-center text-[#FFFFFF]' >
                          <p className='font-primary font-medium text-[16px] text-[#FFFFFF]'>Go to Checkout</p>
                          <IoMdArrowForward className='ml-3 text-[24px] text-[#FFFFFF]' />
                       </Link>
  
               </div>
             </div>
           </div>
      </section>
  </>
  )
}

export default Cart


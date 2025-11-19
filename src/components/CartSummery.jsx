import React from 'react'
import { RiDeleteBinFill} from 'react-icons/ri'
import {Link } from 'react-router'
import { IoMdArrowForward } from "react-icons/io";
import { BiLabel } from 'react-icons/bi';
import img1 from '../assets/Images/image_8__3_-removebg-preview.png'
import img2 from '../assets/Images/Frame_33__1_-removebg-preview.png'
import img3 from '../assets/Images/Frame_33__2_-removebg-preview.png'

const Cart = () => {
  return (
    <>
      <section className="cart px-4 md:px-6 lg:px-10 py-10">
        <div className="container mx-auto">
          <hr className='mb-10 mt-7 text-[#00000010]' />

          <div className="heading font-bold font-secondary text-3xl md:text-4xl lg:text-[40px] mb-7 mt-7 text-[#000000] text-center md:text-left">
            <h1>YOUR CART</h1>
          </div>

          <div className="summary_card flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-start">

            {/* Product Section */}
            <div className="product_cart w-full lg:w-[715px] border rounded-[20px] py-6 px-5 border-[#00000010]">

              {/* PRODUCT BLOCK */}
              {[{img: img1, name: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145},
                {img: img2, name: "CHECKERED SHIRT", size: "Medium", color: "Red", price: 180},
                {img: img3, name: "SKINNY FIT JEANS", size: "Large", color: "Blue", price: 240}
              ].map((item, index) => (
                <div key={index}>
                  <div className="Product_cart_details flex flex-col sm:flex-row justify-between gap-5 sm:gap-0">

                    {/* Product Image + Info */}
                    <div className="product_details flex gap-4">
                      <div className="Product_image w-[100px] h-[100px] sm:w-[124px] sm:h-[124px] bg-[#F0EEED] rounded-[9px] flex items-center justify-center">
                        <img src={item.img} alt="product image" className='w-full h-full object-contain' />
                      </div>

                      <div className="product_img_details">
                        <h2 className='font-bold font-primary text-[18px] sm:text-[20px] text-[#000000] mb-[3px]'>{item.name}</h2>
                        <p className='font-normal font-primary text-[14px] text-[#000000]'>Size: <span className='text-[#00000060]'>{item.size}</span></p>
                        <p className='font-bold font-primary text-[18px] sm:text-[20px] text-[#000000] mb-[3px]'>Color: <span className='font-normal text-[14px] text-[#00000060]'>{item.color}</span></p>
                        <h3 className='font-bold font-primary text-[20px] sm:text-[24px] text-[#000000]'>${item.price}</h3>
                      </div>
                    </div>

                    {/* Add + Delete */}
                    <div className="product_add flex sm:flex-col justify-between sm:justify-start items-end sm:items-end gap-4 sm:gap-0">
                      <button className="product_icon text-[22px] sm:text-[24px] text-[#FF3333]"><RiDeleteBinFill /></button>

                      <div className="product_cart_count w-[110px] sm:w-[126px] h-10 sm:h-11 rounded-[62px] bg-[#F0F0F0] flex justify-evenly items-center text-[18px]">
                        <button>-</button>
                        <h2>1</h2>
                        <button>+</button>
                      </div>
                    </div>

                  </div>

                  {index !== 2 && <hr className='mt-6 mb-6 text-[#00000010]' />}
                </div>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="order_cart w-full lg:w-[505px] border rounded-[20px] border-[#00000010] py-5 px-6">
              <h2 className='font-bold font-primary text-[22px] sm:text-[24px] text-[#000000] mb-6'>Order Summary</h2>

              <div className='flex justify-between items-center'>
                <p className='text-[18px] sm:text-[20px] text-[#00000060]'>Subtotal</p>
                <h4 className='font-bold text-[18px] sm:text-[20px] text-[#000000]'>$565</h4>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <p className='text-[18px] sm:text-[20px] text-[#00000060]'>Discount (-20%)</p>
                <h4 className='font-bold text-[18px] sm:text-[20px] text-[#FF3333]'>-$113</h4>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <p className='text-[18px] sm:text-[20px] text-[#00000060]'>Delivery Fee</p>
                <h4 className='font-bold text-[18px] sm:text-[20px] text-[#000000]'>$15</h4>
              </div>

              <hr className='mt-5 text-[#00000010]' />

              <div className='flex justify-between items-center mt-5'>
                <p className='text-[20px] text-[#000000] font-semibold'>Total</p>
                <h4 className='font-bold text-[20px] text-[#000000]'>$467</h4>
              </div>

              <div className="promo_button flex flex-col sm:flex-row sm:justify-between items-center mt-6 mb-6 gap-4">
                <div className='w-full sm:w-[326px] flex items-center gap-2.5 px-4 rounded-[62px] bg-[#F0F0F0]'>
                  <BiLabel className='text-[22px] sm:text-[24px] text-[#00000040]' />
                  <input className='w-full py-[13px] ml-1 sm:ml-3 outline-none text-[#00000060] text-[14px] sm:text-[16px]' type="text" placeholder='Add promo code' />
                </div>

                <button className='btn w-full sm:w-[119px] h-12 rounded-[62px] bg-[#000000] text-[#FFFFFF] font-medium text-[16px]'>Apply</button>
              </div>

              <Link to={'/'} className='w-full h-12 rounded-[62px] bg-[#000000] flex justify-center items-center text-[#FFFFFF]'>
                <p className='font-medium text-[16px]'>Go to Checkout</p>
                <IoMdArrowForward className='ml-2 text-[22px]' />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart

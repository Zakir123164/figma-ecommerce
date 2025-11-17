import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

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
               <div className="product_cart w-[715px] h-[508px] border rounded-[20px]  py-6 px-5">
                   <div className="Product_cart_details flex justify-between ">
                    <div className="product_details flex gap-4">
                      <div className="Product_image w-[124px] h-[124px] bg-[#F0EEED] rounded-[9px]">
                         <img src="" alt="" />
                      </div>
                      <div className="product_img_details">
                        <h2>Gradient Graphic T-shirt</h2>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <h3>$145</h3>
                      </div>
                    </div>

                    <div className="product_add"></div>
                    <div className="product_icon"><RiDeleteBinLine /></div>
                    <div className="product_cart_count w-[126px] h-11 rounded-[62px] bg-[#F0F0F0] flex justify-evenly items-center">
                       <button>-</button>
                       <h2>1</h2>
                       <button>+</button>
                    </div>
                    </div>  
               </div>
               <div className="order_cart w-[505px] h-[458px] border rounded-[20px] text-[#00000010]">
                      
               </div>
             </div>
           </div>
      </section>
  </>
  )
}

export default Cart
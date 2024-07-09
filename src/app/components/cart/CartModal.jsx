import React from 'react'
import Image from 'next/image'
import CartImage from "../../../assets/Images/CartImage.png"
import CloseIcon from "../../../assets/SVG/Close.jsx"

const CartModal = () => {
  return (
    <div className='bg-[#4b494a] min-h-screen flex flex-col items-center justify-center'>
      <div className='bg-[#fefafb] w-5/12 mx-auto rounded-lg px-5 py-8'>
      <div className='mb-10'>
      <div className=''>
        <p className='text-center text-sm mb-5'>Product added to cart successfully!</p>
      </div>
      <div>
        <p className='text-center category text-red-600'>Please sign in for a proper tracking of your product</p>
      </div>
      </div>

      <div className='flex items-center justify-center'>
        <div>
            <Image src={CartImage} alt='' className='max-w-[80%]'/>
        </div>
        <div className=''>
            <h1>MEDIX 5.5 <span className='opacity-[0.6]'>Body Moisturizer</span></h1>
            <p className='text-sm mt-2 mb-4 opacity-[0.6]'>Glycolic and Lactic Acid Body Moisturizer</p>
            <div>
            <div className='flex items-center justify-between'>
            <button className='border-[1.2px] border-[#ffb6c1] rounded-3xl px-4 py-1'>- | 1 | +</button>
            <p className='text-sm'>SubTotal: <span className='category'>#15,000</span></p>
            </div>
            </div>
        </div>
      </div>


      <div>
        <div>
        <div className='mb-2 mt-4'>
            <p className='category'>Cart Total</p>
        </div>
        <div className='border-[0.1px] w-full border-[#332427] mt-3 mb-5 opacity-[0.2]'></div>
        <div className='w-full h-[0.1px] bg-black opacity-[0.2]'></div>
        </div>

        <div className='shadow-md border-[0.2px]'>
            <div className='bg-[#fee1e5] text-[#332427] border-b-[0.2px] flex items-center justify-between px-3 py-2'>
                <p className='text-sm category'>SubTotal</p>
                <p className='text-sm'>#15,000</p>
            </div>
            <div className='flex items-center justify-between px-3 pt-5 pb-2 '>
                <p className='text-sm category'>Order Summary</p>
                <p className='text-sm'>dropdown icon</p>
            </div>
        </div>
    
    <div className='flex items-center justify-between gap-6 mt-10'>
        <button className='w-full border-[0.2px] border-[#ffcfd7] bg-transparent text-[#ffcfd7] px-4 py-2 rounded-3xl text-sm'>Continue shopping</button>
        <button className='w-full bg-[#ffb6c1] text-[#332427] px-4 py-2 rounded-3xl text-sm'>Proceed to check out</button>
    </div>
      </div>
    </div>
    </div>
  )
}

export default CartModal

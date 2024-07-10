import React from 'react'
import HeaderTwo from '../header/HeaderTwo'
import Link from 'next/link'

const Details = () => {
  return (
    <div>
      <div>
        <HeaderTwo/>
      </div>
      <div className='flex flex-col items-center justify-center bg-[#fbf4f5] px-5 md:px-14 py-10'>
        <div className='flex items-center gap-10 justify-between w-[95%]'>
          <div className='hidden md:flex gap-5 items-center'>
            <p className='semibold text-sm'>Payment plan {'>'} </p>
            <h1 className='text-sm'>MEDIX 5.5 <span className='opacity-[0.7]'>Body Moisturizer</span></h1>
            <p className='opacity-[0.7] text-sm'>Glycolic and Lactic Acid Body Moisturizer</p>
          </div>
          <div>
            <p className='text-sm'>Already an existing customer? <span className='text-[#e299a4]'>Please Login</span></p>
          </div>
        </div>

        <div className='bg-[#fff] my-10 w-[95%] rounded-lg'>
          <div className='bg-[#fdf0f1] px-4 py-3 mx-3 my-3'>
            <p className='category'>1. CUSTOMER DETAILS</p>
          </div>
          <div className='px-5 pb-6 pt-2'>
            <p className='pb-3 semibold opacity-[0.8]'>Badru Islamiyat</p>
            <p className='opacity-[0.7] text-sm'>House 28, Umbrella Bus Stop, Odogunyun, Ikorodu | Osun- Ile Ife | 08158879092</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[95%] mb-10 rounded-lg'>
          <div className='bg-[#fdf0f1] px-3 py-2 mx-3 my-3'>
            <p className='category'>2. DELIVERY DETAILS</p>
          </div>
          <div className='px-5 pb-6 pt-2'>
            <p className='pb-3 semibold opacity-[0.8]'>Rider Pick Up</p>
            <p className='opacity-[0.7] text-sm'>Between 15 July and 27 July</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[95%] rounded-lg'>
          <div className='bg-[#fdf0f1] px-4 py-3 mx-3 my-3'>
            <p className='category'>3. PAYMENT METHOD</p>
          </div>
          <div className='px-5 pb-6 pt-2'>
            <p className='pb-3 semibold opacity-[0.8]'>Pay with Cards, Bank Transfer or USSD</p>
            <p className='opacity-[0.7] text-sm'>You will be redirected to secure payment page</p>
          </div>
        </div>

        <Link href='/payment'>
          <div className='mt-7 w-full'>
            <button className='bg-[#ffb6c1] text-[#332427] rounded-3xl px-10 md:px-20 py-2 text-sm semibold border-[0.2px] border-[#e3dadb] w-full'>
              Place Order
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Details;

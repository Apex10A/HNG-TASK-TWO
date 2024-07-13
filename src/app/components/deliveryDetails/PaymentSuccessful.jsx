import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SuccessTick from "../../../assets/Images/SuccesTick.png"
// import CopyIcon from "../../../assets/Images/CopyIcon.png"
import CopyIcon from "../../../assets/SVG/CopyIcon.jsx"

const PaymentSuccessful = () => {
  return (
    <div className='flex flex-col items-center py-10 px-5 md:px-10 min-h-screen justify-center bg-[#fbf4f5] w-full'>
      <div className='max-w-xl text-center flex flex-col items-center justify-center'>
        <Image src={SuccessTick} alt='' className='mx-auto '/>
        <p className='pt-6 pb-5 semibold'>Payment received successfully</p>
        <p className='text-center paragraph text-[#5b4e50]'>Your products will be delivered withing the delivery date. Keep your contact number close. Thank you for the purchase!</p>
      </div>

      <div className='bg-[#fff] my-4 py-10 px-8 rounded-lg'>
      <div className='flex items-center justify-between'>
        <div className=''>
        <div className='pb-6'>
            <p className='semibold text-sm'>Payment Details</p>
        </div>
        <div className=''>
            <p className='paragraph text-[#5b4e50] text-sm pb-2'>Customer Details</p>
            <p className='semibold'>XXXXXXX413 | Badru Islamiyat | S33465562</p>
        </div>
        <div className='py-5'>
            <p className='paragraph text-[#5b4e50] text-sm pb-2'>Beneficiary Details</p>
            <p className='semibold'>SkinHub | 0063435149  | Sterling Bank</p>
        </div>
        <div>
            <p className='paragraph text-[#5b4e50] text-sm pb-2'>Amount Paid</p>
            <p className='semibold'>#18,000</p>
        </div>
        </div>
        <div className='cursor-pointer'>
            <CopyIcon/>
        </div>
      </div>

      <div className='border-[0.1px] w-full border-[#332427] my-5 opacity-[0.2]'></div>

      <div>
        <p  className='semibold pb-4'>Order #123456</p>
        <p className='paragraph text-[#5b4e50] pb-2 text-sm'>Placed on: 07-07-2024</p>
        <p className='paragraph text-[#5b4e50] text-sm'>No of Items: 1</p>
      </div>

      <div className='border-[0.1px] w-full border-[#332427] my-4 opacity-[0.2]'></div>

      <div>
        <p className='semibold text-[#5b4e50] text-sm'>Track your purchase with our customer care line: <span className=''>+2340034234456</span></p>
      </div>
      </div>

      <Link href='/'>
      <div className=''>
      <button className='bg-[#ffb6c1] text-[#332427] rounded-3xl px-10 md:px-20 py-2'>Back Home</button>  
      </div>
      </Link>
    </div>
  )
}

export default PaymentSuccessful

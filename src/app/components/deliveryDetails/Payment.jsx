import React from 'react'
import Link from 'next/link'
import CopyIcon from '@/assets/SVG/CopyIcon'

const Payment = () => {
  return (
    <div className='flex flex-col items-center py-10 px-5 md:px-10 min-h-screen justify-center bg-[#fbf4f5] w-full'>

      <div className='max-w-2xl text-center flex flex-col items-center justify-center'>
      <div>
        <p className='pt-6 pb-5 semibold'>Kindly make payment for your goods</p>
      </div>
      <div>
        <p className='text-center paragraph text-[#5b4e50]'>Please follow the instructions below and do not refresh or leave the page after making payment. Payment confirmation may take up to 2 minutes</p>
      </div>
      </div>

      <div className='bg-[#fff] my-4 py-10 px-8 rounded-lg'>
        <div className='pb-6'>
            <p className='semibold'>Transfer to the account details below</p>
        </div>
        <div className='pb-5'>
            <p className='paragraph text-[#5b4e50] text-sm pb-1'>Bank Name</p>
            <p className='semibold'>Sterling Bank</p>
        </div>
        <div className='flex items-center justify-between'>
        <div className='pb-5'>
            <p className='paragraph text-[#5b4e50] text-sm pb-1'>Account Number</p>
            <p className='semibold'>0063435149</p>
        </div>
        <div>
            <CopyIcon/>
        </div>
        </div>

        <div>
            <p className='paragraph text-[#5b4e50] text-sm pb-1'>Account Name</p>
            <p className='semibold'>SkinHub</p>
        </div>

        <div className='border-[0.1px] w-full border-[#332427] my-5 opacity-[0.2]'></div>

        <div className='flex items-center justify-between'>
            <div>
                <p className='semibold pb-4'>Transfer exact amount to avoid transaction failure</p>
                <p className='paragraph text-[#5b4e50] text-sm pb-1'>Amount to Pay</p>
                <p className='semibold'>#18,000</p>
            </div>
            <div>
                <CopyIcon/>
            </div>
        </div>

        <div className='border-[0.1px] w-full border-[#332427] my-5 opacity-[0.2]'></div>

        <div>
            <p className='text-center semibold'>This screen will be updated after payment</p>
        </div>

        

      </div>
    </div>
  )
}

export default Payment

"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CopyIcon from '@/assets/SVG/CopyIcon';
import SuccessTick from "../../../assets/Images/SuccesTick.png";
import HeaderThree from '../header/HeaderThree';

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPaymentSuccess(true);
    }, 5000); // Change to 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (paymentSuccess) {
    return (
      <div>
        <div>
          <HeaderThree/>
        </div>
        <div className='flex flex-col items-center py-10 px-5 md:px-10 justify-center bg-[#fbf4f5] w-full'>
        <div className='max-w-xl text-center flex flex-col items-center justify-center'>
          <Image src={SuccessTick} alt='' className='mx-auto '/>
          <p className='pt-6 pb-5 semibold'>Payment received successfully</p>
          <p className='text-center paragraph text-[#5b4e50]'>Your products will be delivered within the delivery date. Keep your contact number close. Thank you for the purchase!</p>
        </div>

        <div className='bg-[#fff] my-4 py-10 px-8 rounded-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='pb-6'>
                <p className='semibold text-sm'>Payment Details</p>
              </div>
              <div>
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
            <p className='semibold pb-4'>Order #123456</p>
            <p className='paragraph text-[#5b4e50] pb-2 text-sm'>Placed on: 07-07-2024</p>
            <p className='paragraph text-[#5b4e50] text-sm'>No of Items: 1</p>
          </div>

          <div className='border-[0.1px] w-full border-[#332427] my-4 opacity-[0.2]'></div>

          <div>
            <p className='semibold text-[#5b4e50] text-sm'>Track your purchase with our customer care line: <span>+2340034234456</span></p>
          </div>
        </div>

        
        <div>
        <Link href="/" passHref>
          <button className='bg-[#ffb6c1] text-[#332427] rounded-3xl px-10 md:px-20 py-2 text-sm semibold border-[0.2px] border-[#e3dadb] w-full'>Back Home</button>  
        </Link>
        </div>
       
      </div>
      </div>
    );
  }

  return (
    <div className=''>
      <div>
        <HeaderThree />
      </div>
      <div className='flex flex-col items-center py-10 px-5 md:px-10 justify-center bg-[#fbf4f5] w-full'>
      <div className='max-w-2xl text-center flex flex-col items-center justify-center'>
        <div>
          <p className='pt-6 pb-5 semibold'>Kindly make payment for your goods</p>
        </div>
        <div>
          <p className='text-center paragraph text-[#5b4e50]'>Please follow the instructions below and do not refresh or leave the page after making payment. Payment confirmation may take up to 6 seconds</p>
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
          <p className='text-center semibold'>This screen will be updated in 5 secs after payment</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Payment;

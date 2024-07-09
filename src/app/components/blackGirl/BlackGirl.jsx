import React from 'react';
import Image from 'next/image';
import FaceCard from "../../../assets/Images/FaceCard.png";
import BlackCombo from "../../../assets/Images/BlackCombo.png";

const BlackGirl = () => {
  return (
    <div className='flex justify-between items-center md:mx-14'>
      <div className='h-full'>
        <Image src={FaceCard} alt='Face Card' className='rounded-lg h-full' />
      </div>
      <div className='flex-1 bg-[#c78500] flex flex-col justify-center items-center text-center'>
        <p className='text-white font-bold text-lg'>BLACK GIRL</p>
        <p className='text-white mt-2'>Special Combo Package</p>
        <div className='mt-4'>
          <p className='text-white font-semibold text-xl'>#120,000</p>
        </div>
      </div>
      <div className='h-full'>
        <Image src={BlackCombo} alt='Black Combo' className='h-full' />
      </div>
    </div>
  );
};

export default BlackGirl;

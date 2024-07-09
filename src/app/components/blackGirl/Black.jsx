import React from 'react'
import Image from 'next/image'
import BlackCombo from "../../../assets/Images/BlackCombo.png"
import FaceCard from "../../../assets/Images/FaceCard.png"
import Blacker from "../../../assets/Images/Black.png"

const Black = () => {
  return (
    <div className='mx-5 md:mx-10 md:my-10 my-5'>
      <div className='w-full bg-[#c78500] md:rounded-l-xl md:rounded-r-xl'>
      <div className='md:flex items-center justify-between'>
      <div>
        <Image src={FaceCard} alt='' className='rounded-l-xl with'/>
      </div>

      <div className='bg-[#c78500] h-full py-8 md:py-0'>
        <p className='text-white text-4xl text-center product'>BLACK GIRL COMBO</p>
        <p className='text-white text-2xl text-center product pt-2'>#120,000</p>
      </div>

      <div>
        <Image src={BlackCombo} alt='' className='rounded-r-xl with'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Black
